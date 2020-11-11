import React from "react";
import { Outlet } from "react-router-dom";
import { Container, Grid, Paper } from "@material-ui/core";
import { upperFirst } from "lodash";
import { entityTypeKs } from "config/entities";
import { AppBar } from "components/AppBar";
import { MenuDrawer } from "components/MenuDrawer";

const menuItemProps = entityTypeKs.map( id => (
  {
    to: id,
    text: upperFirst(id),
  }
));

export function EntityTemplate() {
  return (
    <Grid>
      <AppBar />
      <MenuDrawer menuItemProps={menuItemProps} />
      <Container maxWidth={false}>
        <Paper elevation={1}>
          <Outlet />
        </Paper>
      </Container>
    </Grid>
  );
}
