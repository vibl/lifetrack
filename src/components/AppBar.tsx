import React from "react";
import { AppBar as MuAppbar, Button, IconButton, Toolbar } from "@material-ui/core";
import useRecoil from "data/state/recoil";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";
import { usePathTo } from "util/router";

function CreateButton() {
  const pathTo = usePathTo();
  return (
      <Button 
        component={Link} 
        to={pathTo({ action: "create" })}
      >
        Create
      </Button>
    );
}

function AppBar() {
  const [, setDrawerIsOpen] = useRecoil.drawer();
  const handleDrawerOpen = () => setDrawerIsOpen(true);
  return (
    <MuAppbar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"   
            onClick={handleDrawerOpen}  
          >
            <MenuIcon />
          </IconButton>
          <CreateButton/>
        </Toolbar>
    </MuAppbar>
  );
}

export default AppBar;
