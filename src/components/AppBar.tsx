import React, { FC } from "react";
import { AppBar as MuAppbar, IconButton, Toolbar } from "@material-ui/core";
import useRecoil from "data/state/recoil";
import MenuIcon from "@material-ui/icons/Menu";

const AppBar = () => {
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
        </Toolbar>
    </MuAppbar>
  );
}

export default AppBar;
