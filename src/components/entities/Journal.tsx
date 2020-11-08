import React from "react";
import { Outlet } from "react-router-dom";
import { Container, Grid, Paper } from "@material-ui/core";
import { upperFirst } from "lodash";
import { entityTypeIds } from "config/entity";
import AppBar from "components/AppBar";
import MenuDrawer from "components/MenuDrawer";

const menuItemProps = entityTypeIds.map( id => (
  {
    to: id,
    text: upperFirst(id),
  }
));

const EntityPage = () => {
  return (
    <Grid>
      <AppBar/>
      <MenuDrawer menuItemProps={menuItemProps} />
      <Container maxWidth={false}>
        <Paper elevation={1}>
          <Outlet />
        </Paper>
      </Container>
    </Grid>
  );
};

export default EntityPage;
