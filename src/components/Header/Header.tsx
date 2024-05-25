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
} from "@mui/material";

import FeedbackModal from "components/FeedbackModal/FeedbackModal";
import Sidebar from "components/Sidebar/Sidebar";

import { FEEDBACK_BUTTON_TEXT, PAGES } from "constants/common.constants";

import logoImage from "assets/logo.jpg";

import { useStyles } from "./styles";

const Header = () => {
  const [value, setValue] = useState(false);
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);
  const [openModal, setOpenModal] = useState<boolean>(false);

  const router = useRouter();
  const classes = useStyles();

  const handleOnClickImage = (): void => {
    setValue(false);
    router.push("/");
  };

  return (
    <>
      <AppBar position="relative" className={classes.header}>
        <Toolbar className={classes.toolBar}>
          <Box className={classes.logo}>
            <NextImage
              src={logoImage}
              fill
              alt="logo"
              onClick={handleOnClickImage}
            />
          </Box>

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

          <Tabs
            className={classes.tabs}
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
            onClick={() => setOpenModal(true)}
          >
            <Typography className={classes.buttonText}>
              {FEEDBACK_BUTTON_TEXT}
            </Typography>
          </Button>
        </Toolbar>
      </AppBar>
      <FeedbackModal open={openModal} onClose={() => setOpenModal(false)} />
    </>
  );
};

export default Header;
