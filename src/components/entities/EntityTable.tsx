import React from "react";
import memoize from "lodash/memoize";
import { CellParams, DataGrid, SelectionChangeParams } from '@material-ui/data-grid';
import { useQuery } from "@apollo/client";
import { entitiesConfigC, TListFieldConfig } from "config/entities";
import { useAtom } from "data/state/recoil";
import { SelectionAtom } from "data/state/atoms/selection";
import { useEntityPageTuple, useGoTo } from "components/Router";
import { entityGql } from "data/graphql/entities";
import { Index } from "util/types";

const getColumns = memoize(
  (sequenceA: string[], fieldC: Index<TListFieldConfig>) => 
    sequenceA
      .map( fieldId => {
        const fieldO = fieldC[fieldId];
        return {
          field: fieldId,
          headerName: fieldO.label,
          width: fieldO.width,
          type: fieldO.type === "date" ? "dateTime" : fieldO.type,
        }
      }
  )
);

export function EntityTable() {
  const goTo = useGoTo();
  const [entityType] = useEntityPageTuple();
  const [, setSelection] = useAtom.selection();
  const { loading, error, data: dataC } = useQuery(entityGql[entityType].list);
  const configO = entitiesConfigC[entityType];
  const { sequenceA, fieldC } = configO.list;
  const columnC = getColumns(sequenceA, fieldC);

  const rowC = React.useMemo(
    () => dataC?.list?.map(
      (dataObj: any) => sequenceA.reduce(
        (acc, fieldId) => {
          const fieldO = fieldC[fieldId];
          return { ...acc, id: dataObj.id, [fieldId]: fieldO.get ? fieldO.get(dataObj) : dataObj[fieldId] }
        },
        {})),
    [dataC, configO, fieldC, sequenceA]);

  const sortModelO = sequenceA
    .filter(fieldId => fieldC[fieldId].sort)
    .map( fieldId => ({ field: fieldId, sort: fieldC[fieldId].sort }));

  if (loading || !rowC)
    return <p>Loading...</p>;
  if (error)
    return <p>Error :(</p>;

  function onSelection(selectedA: SelectionChangeParams) {
    const selectionA = selectedA.rows.map(o => Number(o.id));
    setSelection((sel: SelectionAtom) => ({ ...sel, [entityType]: selectionA }));
  }
  function handleCellClick(cellO: CellParams) {
    if (cellO.field === columnC[0].field) {
      goTo([, "update"]);
    }
  }
  return (
    <div style={{ height: 800, width: '100%' }}>
      <DataGrid
        columns={columnC}
        rows={rowC}
        rowCount={rowC.length}
        sortModel={sortModelO}
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
