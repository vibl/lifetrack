import useRecoil from "data/state/recoil";
import React, { FC } from "react";
import {
  Drawer as MuDrawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@material-ui/core";
import { ChevronLeft } from "@material-ui/icons";
import { Link } from "react-router-dom";

interface Props {
  to: string;
  text: string;
}

const LinkItem: FC<Props> = ({ to, text }) => (
  <ListItem button component={Link} to={to}>
    <ListItemText primary={text} />
  </ListItem>
);

const Drawer = () => {
  const [isOpen, setIsOpen] = useRecoil.drawer();

  return (
    <MuDrawer variant="persistent" anchor="left" open={isOpen}>
      <IconButton onClick={() => setIsOpen(false)}>
        <ChevronLeft />
      </IconButton>
      <List>
        <LinkItem to="/entry" text={"Entries"} />
        <LinkItem to="/tracker" text={"Trackers"} />
        <LinkItem to="/category" text={"Categories"} />
        <LinkItem to="/unit" text={"Unit"} />
      </List>
    </MuDrawer>
  );
};

export default Drawer;
