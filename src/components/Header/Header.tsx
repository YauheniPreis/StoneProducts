import React, { useState } from "react";

import NextImage from "next/image";
import { useRouter } from "next/router";

import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
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

import Sidebar from "components/Sidebar/Sidebar";

import { FEEDBACK_BUTTON_TEXT, PAGES } from "constants/common.constants";

import logoImage from "assets/logo.jpg";

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
  button: {
    marginLeft: "auto",
    borderRadius: "5px",
    [theme.breakpoints.down("md")]: {
      marginTop: "5px",
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
  logo: {
    marginRight: "10px",
    position: "relative",
    height: "58px",
    minWidth: "85px",
  },
}));

const Header = () => {
  const [value, setValue] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);

  const router = useRouter();
  const theme = useTheme();
  const classes = useStyles();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <AppBar className={classes.header}>
      <Toolbar className={classes.toolBar}>
        <Box className={classes.logo}>
          <NextImage src={logoImage} fill alt="logo" />
        </Box>
        {isMatch ? (
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
        ) : (
          <>
            <Tabs
              TabIndicatorProps={{
                style: { display: "none" },
              }}
              value={value}
              onChange={(e, value) => setValue(value)}
            >
              {PAGES.map((page, index) => (
                <Tab
                  key={index}
                  className={classes.tab}
                  label={page.title}
                  onClick={() => router.push(page.link)}
                />
              ))}
            </Tabs>
            <Button
              className={classes.button}
              variant="contained"
              size="large"
              color="error"
            >
              <Typography className={classes.buttonText}>
                {FEEDBACK_BUTTON_TEXT}
              </Typography>
            </Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
