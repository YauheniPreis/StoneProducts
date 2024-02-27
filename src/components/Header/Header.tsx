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

import Sidebar from "components/Sidebar/Sidebar";

import { FEEDBACK_BUTTON_TEXT, PAGES } from "constants/common.constants";

import logoImage from "assets/logo.jpg";

import { useStyles } from "./styles";

const Header = () => {
  const [value, setValue] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);

  const router = useRouter();
  const theme = useTheme();
  const classes = useStyles();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <AppBar position="relative" className={classes.header}>
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
