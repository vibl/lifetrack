import React from "react";
import {
  AppBar as MuAppbar, IconButton, Toolbar, Typography,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { useAtom } from "data/state/recoil";
import { useEntityPageTuple, useIsCurrentLocationAnEntityPage } from "components/Router";
import { upperFirst } from "lodash";
import pluralize from "pluralize";
import { DeleteButton } from "./DeleteButton";
import { CreateButton } from "./CreateButton";

function EntityPageTitle() {
  const [entityType, entityPage] = useEntityPageTuple();
  return (
    <Typography variant="h6" className="flex-grow">
      {upperFirst(entityPage)} {entityPage === "list" ? pluralize(entityType) : entityType}
    </Typography>
  );
}

function EntityBar() {
  return (
    <>
      <EntityPageTitle />
      <CreateButton />
      <DeleteButton />
    </>
  );
}

export function AppBar() {
  const isCurrentLocationAnEntityPage = useIsCurrentLocationAnEntityPage();
  const [, setDrawerIsOpen] = useAtom.drawer();
  return (
    <MuAppbar position="static">
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={() => setDrawerIsOpen(true)}
        >
          <MenuIcon />
        </IconButton>
        { isCurrentLocationAnEntityPage && <EntityBar />}
      </Toolbar>
    </MuAppbar>
  );
}
