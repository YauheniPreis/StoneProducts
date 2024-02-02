import React, { useState } from "react";
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import {
  FEEDBACK_BUTTON_TEXT,
  PAGES,
  PHONE_NUMBER,
} from "constants/common.constants";
import Sidebar from "components/Sidebar/Sidebar";

const useStyles = makeStyles((theme) => ({
  header: {
    display: "flex",
    justifyContent: "center",
    height: "84px",
    width: "100%",
    backgroundColor: "#fff",
  },
  toolBar: {
    padding: "0 20px",
    [theme.breakpoints.down("lg")]: {
      padding: "0 15px",
    },
  },
  tab: {
    fontSize: "15px",
    fontWeight: 600,
    color: "#000",
    "&.Mui-selected": {
      color: "#ed1a1a",
    },
    [theme.breakpoints.down("lg")]: {
      padding: "4px 8px",
      fontSize: "13px",
    },
  },
  feedback: {
    marginLeft: "auto",
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
    },
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
    },
  },
  callNumber: {
    fontSize: "17px",
    fontWeight: 600,
    lineHeight: "23px",
    color: "#000",
    [theme.breakpoints.down("lg")]: {
      fontSize: "15px",
    },
  },
  button: {
    marginLeft: "37px",
    borderRadius: "5px",
    backgroundColor: "#ed1a1a",
    "&:hover": {
      backgroundColor: "#61ab16",
    },
    [theme.breakpoints.between("md", "lg")]: {
      marginLeft: "20px",
    },
    [theme.breakpoints.down("md")]: {
      marginTop: "5px",
      marginLeft: "0",
    },
  },
  buttonText: {
    fontSize: "15px",
    fontWeight: 700,
    color: "#ffffff",
    [theme.breakpoints.down("lg")]: {
      fontSize: "13px",
    },
  },
  iconButton: {
    marginLeft: "auto",
    color: "#000",
  },
}));

const Header = () => {
  const [value, setValue] = useState(0);
  const [openDrawer, setOpenDrawer] = useState(false);

  const theme = useTheme();
  const classes = useStyles();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <AppBar className={classes.header}>
      <Toolbar className={classes.toolBar}>
        {!isMatch && (
          <Tabs
            TabIndicatorProps={{
              style: { display: "none" },
            }}
            value={value}
            onChange={(e, value) => setValue(value)}
          >
            {PAGES.map((page, index) => (
              <Tab key={index} className={classes.tab} label={page} />
            ))}
          </Tabs>
        )}
        <Box className={classes.feedback}>
          <Typography className={classes.callNumber}>{PHONE_NUMBER}</Typography>
          <Button className={classes.button} variant="contained" size="large">
            <Typography className={classes.buttonText}>
              {FEEDBACK_BUTTON_TEXT}
            </Typography>
          </Button>
        </Box>
        {isMatch && (
          <>
            <Sidebar
              showSidebar={openDrawer}
              onSidebarClick={() => setOpenDrawer(false)}
            />
            <IconButton
              className={classes.iconButton}
              onClick={() => setOpenDrawer(!openDrawer)}
            >
              <MenuRoundedIcon fontSize="large" />
            </IconButton>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
