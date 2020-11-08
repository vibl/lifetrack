import useRecoil from "data/state/recoil";
import React, { FC } from "react";
import {
  Drawer,
  DrawerProps,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import { ChevronLeft } from "@material-ui/icons";
import { Link } from "react-router-dom";

type MenuItemProp = {
  to: string;
  text: string;
}

type MenuDrawerProps = DrawerProps & { menuItemProps: MenuItemProp[] };

const MenuDrawer: FC<MenuDrawerProps> = ({ menuItemProps, ...props }) => {
  const [isOpen, setIsOpen] = useRecoil.drawer();

  return (
    <Drawer variant="temporary" anchor="left" open={isOpen} onClose={() => setIsOpen(false)} {...props} >
      <IconButton onClick={() => setIsOpen(false)}>
        <ChevronLeft />
      </IconButton>
      <List>
        { menuItemProps.map(({to, text}) => 
            <ListItem key={to} button component={Link} to={to} onClick={() => setIsOpen(false)} >
              <ListItemText primary={text} />
            </ListItem>
        )}
      </List>
    </Drawer>
  );
};

export default MenuDrawer;
