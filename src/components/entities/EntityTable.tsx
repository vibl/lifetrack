import React, { FC } from "react";
import memoize from "lodash/memoize";
import { DataGrid, SelectionChangeParams } from '@material-ui/data-grid';
import { gql, useQuery } from "@apollo/client";
import entitiesConfig, { Tfield } from "config/entity";
import useAtom from "data/state/recoil";
import { SelectionAtom } from "data/state/atoms/selection";
import { useEntityPageTuple } from "components/Router";

const getColumns = memoize(
  (fields: Tfield[]) => 
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

  const [entityType] = useEntityPageTuple();
  const [selection, setSelection] = useAtom.selection();
  const config = entitiesConfig[entityType];
  const { loading, error, data } = useQuery(gql(config.gql.list));
  const columns = getColumns(config.fields);

  const rowsData = React.useMemo(
    () => data?.list?.map(
        (obj: any) => config.fields.reduce(
          (acc, field: Tfield) =>  ({...acc, id: obj.id, [field.id]: field.get ? field.get(obj) : obj[field.id]})
      , {}))
    , [data, config]);

  const sortModel = config.fields
    .filter( field => field.sort)
    .map( (field) => ({ field: field.id, sort: field.sort }));
    
  if (loading || !rowsData ) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const onSelection = (selected: SelectionChangeParams) => {
    const selection = selected.rows.map( o => Number(o.id) );
    setSelection( (sel: SelectionAtom) => ({ ...sel, [entityType]: selection }) );
  }
  console.log("rowsData", rowsData);

  return (
     <div style={{ width: '100%' }}>
       <DataGrid 
        columns={columns} 
        rows={rowsData} 
        rowCount={rowsData.length}
        sortModel={sortModel}
        onSelectionChange={onSelection}
        autoHeight
        pageSize={20}
        checkboxSelection
        disableExtendRowFullWidth
      />
    </div>
  );
}

export default EntityTable;
