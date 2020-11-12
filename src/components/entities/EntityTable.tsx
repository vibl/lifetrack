import React, { FC } from "react";
import memoize from "lodash/memoize";
import { CellParams, DataGrid, SelectionChangeParams } from '@material-ui/data-grid';
import { useQuery } from "@apollo/client";
import { entitiesConfig, TbaseFieldConfig, TlistFieldConfig } from "config/entities";
import { useAtom } from "data/state/recoil";
import { SelectionAtom } from "data/state/atoms/selection";
import { useEntityPageTuple, useGoTo } from "components/Router";
import { entityGql } from "data/graphql/entities";
import { Index } from "util/types";

const getColumns = memoize(
  (sequence: string[], fieldi: Index<TlistFieldConfig>) => 
    sequence
      .map( fieldId => {
        const field = fieldi[fieldId];
        return {
          field: fieldId,
          headerName: field.label,
          width: field.width,
          type: field.type === "date" ? "dateTime" : field.type,
        }
      }
  )
);

export function EntityTable() {
  const goTo = useGoTo();
  const [entityType] = useEntityPageTuple();
  const [, setSelection] = useAtom.selection();
  const { loading, error, data } = useQuery(entityGql[entityType].list);
  const config = entitiesConfig[entityType];
  const { sequence, fieldi } = config.list;
  const columns = getColumns(sequence, fieldi);

  const rowsData = React.useMemo(
    () => data?.list?.map(
      (dataObj: any) => sequence.reduce(
        (acc, fieldId) => {
          const field = fieldi[fieldId];
          return { ...acc, id: dataObj.id, [fieldId]: field.get ? field.get(dataObj) : dataObj[fieldId] }
        },
        {})),
    [data, config]);

  const sortModel = sequence
    .filter(fieldId => fieldi[fieldId].sort)
    .map( fieldId => ({ field: fieldId, sort: fieldi[fieldId].sort }));

  if (loading || !rowsData)
    return <p>Loading...</p>;
  if (error)
    return <p>Error :(</p>;

  function onSelection(selected: SelectionChangeParams) {
    const selection = selected.rows.map(o => Number(o.id));
    setSelection((sel: SelectionAtom) => ({ ...sel, [entityType]: selection }));
  }
  function handleCellClick(cell: CellParams) {
    if (cell.field === columns[0].field) {
      goTo([, "update"]);
    }
  }
  return (
    <div style={{ width: '100%' }}>
      <DataGrid
        columns={columns}
        rows={rowsData}
        rowCount={rowsData.length}
        sortModel={sortModel}
        onSelectionChange={onSelection}
        onCellClick={handleCellClick}
        autoHeight
        pageSize={20}
        checkboxSelection
        disableExtendRowFullWidth
        disableSelectionOnClick />
    </div>
  );
}
