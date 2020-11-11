import React from "react";
import { Button } from "@material-ui/core";
import useAtom from "data/state/recoil";
import { useEntityMutation } from "data/graphql/hooks";
import pluralize from "pluralize";
import { useEntityPageTuple } from "components/Router";

function DeleteButton() {
  const [entityType, entityPage] = useEntityPageTuple();
  const [selection] = useAtom.selection();
  const selected = selection[entityType];
  const deleteEntity = useEntityMutation(
    "delete",
    entityType,
    onMutationCompleted
  );

  function onMutationCompleted(data: any) {
    console.log("Entity deleted: \n" + JSON.stringify(data));
  }

  function handleClick() {
    for(const id of selected) {
      deleteEntity({ id });
    }
  }

  return selected.length === 0 
    || entityPage !== "list"
    ? null 
    : (
      <Button
        onClick={handleClick}
      >
        Delete {selected.length} {selected.length > 1 ? pluralize(entityType) : entityType}
      </Button>
    );
}

export default DeleteButton;