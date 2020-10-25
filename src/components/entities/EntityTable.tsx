import React, { FC } from "react";
import memoize from "lodash/memoize";
import { DataGrid, SelectionChangeParams } from '@material-ui/data-grid';
import { gql, useQuery } from "@apollo/client";

interface Field {
  id: string,
  default: string | number | Date,
  header?: string,
  get?: (o: any) => any,
  width?: number,
}

const getColumns = memoize(
  (fields: Field[]) => 
    fields
      .filter( field => field.header )
      .map( field => ({
        field: field.id,
        headerName: field.header,
        width: field.width,
        type: typeof field.default
      })
  )
);
interface Config {
  queries: {
    list: string,
    create?: string,
    edit?: string,
  },
  fields: Field[],
}
interface Props {
  config: Config,
 }

const EntityTable: FC<Props> = ({config}) => {

  const { loading, error, data } = useQuery(gql(config.queries.list));

  console.log("data", data);

  const columns = getColumns(config.fields);

  const rowsData = React.useMemo(
    () => data?.entity?.nodes?.map(
        (obj: any) => config.fields.reduce(
          (acc, field: Field) =>  ({...acc, id: obj.name, [field.id]: field.get ? field.get(obj) : obj[field.id]})
      , {}))
    , [data, config]);

  console.log("rowsData", rowsData);

  console.log('columns', columns);

  if (loading || !rowsData ) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const onSelection = (selected: SelectionChangeParams) => {
    console.log("selected", selected);
  }
  return (
     <div style={{ width: '100%' }}>
       <DataGrid 
        columns={columns} 
        rows={rowsData} 
        onSelectionChange={onSelection}
        autoHeight
        autoPageSize
        checkboxSelection
        disableExtendRowFullWidth
      />
    </div>
  );
}

export default EntityTable;
