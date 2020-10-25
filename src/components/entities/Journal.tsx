import React from "react";
import { Outlet } from "react-router-dom";
import { Container, Grid, Paper } from "@material-ui/core";
import AppBar from "components/AppBar";
import Drawer from "components/Drawer";
 
const EntityPage = () => {
  return (
    <Grid>
      <AppBar/>
      <Drawer/>
      <Container>
        <Paper elevation={1}>
          <Outlet />
        </Paper>
      </Container>
    </Grid>
  );
};

export default EntityPage;
