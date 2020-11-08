import React, { FC } from "react";
import memoize from "lodash/memoize";
import { DataGrid, SelectionChangeParams, SortDirection } from '@material-ui/data-grid';
import { gql, useQuery } from "@apollo/client";
import entityConfig, { EntityTypeId, Field } from "config/entity";
import { useRoute } from "util/router";

const getColumns = memoize(
  (fields: Field[]) => 
    fields
      .filter( field => field.header )
      .map( field => ({
        field: field.id,
        headerName: field.header,
        width: field.width,
        type: field.type === "date" ? "dateTime" : field.type,
      })
  )
);

const EntityTable: FC = () => {

  const { entityType } = useRoute();

  const config = entityConfig[entityType];

  const { loading, error, data } = useQuery(gql(config.queries.list));

  console.log("data", data);

  const columns = getColumns(config.fields);

  const rowsData = React.useMemo(
    () => data?.list?.map(
        (obj: any) => config.fields.reduce(
          (acc, field: Field) =>  ({...acc, id: obj.id, [field.id]: field.get ? field.get(obj) : obj[field.id]})
      , {}))
    , [data, config]);

  const sortModel = config.fields
    .filter( field => field.sort)
    .map( (field) => ({ field: field.id, sort: field.sort }));
    
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
        sortModel={sortModel}
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
