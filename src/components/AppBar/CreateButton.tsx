import React from "react";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useEntityPageTuple, usePathTo } from "components/Router";

function CreateButton() {
  const [entityType, entityPage] = useEntityPageTuple();
  const pathTo = usePathTo();

  return entityPage === "create" 
    ? null
    : (
      <Button
        component={Link}
        to={pathTo([, "create" ])}
      >
        Create {entityType}
      </Button>
    );
}

export default CreateButton;