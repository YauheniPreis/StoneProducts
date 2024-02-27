import React from "react";

import CloseIcon from "@mui/icons-material/Close";
import {
  Box,
  Button,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  Typography,
} from "@mui/material";

import { FEEDBACK_BUTTON_TEXT, PAGES } from "constants/common.constants";

import { useStyles } from "./styles";

interface ISidebarProps {
  showSidebar: boolean;
  onSidebarClick: () => void;
}

const Sidebar = ({ showSidebar, onSidebarClick }: ISidebarProps) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Drawer
        classes={{ paper: classes.drawer }}
        anchor="right"
        open={showSidebar}
        onClose={onSidebarClick}
      >
        <IconButton className={classes.iconButton} onClick={onSidebarClick}>
          <CloseIcon fontSize="large" />
        </IconButton>

        <List className={classes.list}>
          {PAGES.map((page, index) => (
            <ListItemButton key={index} className={classes.listItemButton}>
              <Typography className={classes.listItemText}>
                {page.title}
              </Typography>
            </ListItemButton>
          ))}
        </List>

        <Box className={classes.footer}>
          <Button
            className={classes.footerButton}
            variant="contained"
            size="large"
            color="error"
          >
            <Typography className={classes.footerButtoText}>
              {FEEDBACK_BUTTON_TEXT}
            </Typography>
          </Button>
        </Box>
      </Drawer>
    </React.Fragment>
  );
};

export default Sidebar;
