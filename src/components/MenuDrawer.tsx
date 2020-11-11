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
import { useAtom } from "data/state/recoil";

type MenuItemProp = {
  to: string;
  text: string;
}

type MenuDrawerProps = DrawerProps & { menuItemProps: MenuItemProp[] };

export function MenuDrawer({ menuItemProps, ...props }: MenuDrawerProps) {
  const [isOpen, setIsOpen] = useAtom.drawer();

  return (
    <Drawer variant="temporary" anchor="left" open={isOpen} onClose={() => setIsOpen(false)} {...props}>
      <IconButton onClick={() => setIsOpen(false)}>
        <ChevronLeft />
      </IconButton>
      <List>
        {menuItemProps.map(({ to, text }) => (
          <ListItem key={to} button component={Link} to={to} onClick={() => setIsOpen(false)}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}
