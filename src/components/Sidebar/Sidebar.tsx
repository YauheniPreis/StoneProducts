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
import { makeStyles } from "@mui/styles";

import { FEEDBACK_BUTTON_TEXT, PAGES } from "constants/common.constants";

interface ISidebarProps {
  showSidebar: boolean;
  onSidebarClick: () => void;
}

const useStyles = makeStyles({
  drawer: {
    backgroundColor: "#fff",
    maxWidth: "300px",
    width: "100%",
  },
  iconButton: {
    margin: "5px 5px 0 auto",
    color: "#000",
  },
  list: {
    padding: "0 25px 25px",
  },
  listItemButton: {
    padding: "0",
    marginBottom: "15px",
    "&:last-child": {
      marginBottom: "0",
    },
  },
  listItemText: {
    fontSize: "20px",
    fontWeight: 600,
  },
  footer: {
    marginTop: "auto",
    padding: "0 25px 25px",
    textAlign: "center",
  },
  footerButton: {
    height: "60px",
    width: "100%",
    borderRadius: "6px",
  },
  footerButtoText: {
    fontSize: "15px",
    fontWeight: 600,
    color: "#ffffff",
  },
});

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
