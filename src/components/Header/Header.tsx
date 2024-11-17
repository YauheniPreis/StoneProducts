import React, { useState } from "react";

import NextImage from "next/image";
import Link from "next/link";
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

import {
  EMAIL_TEXT,
  FEEDBACK_BUTTON_TEXT,
  LOGO_IMAGE,
  OUR_PRODUCTION_TEXT,
  PAGES,
  PHONE_NUMBER,
  SOCIAL_MEDIA_TELEGRAMM,
  SOCIAL_MEDIA_VK,
} from "constants/common.constants";

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
              src={LOGO_IMAGE}
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

          <Box className={classes.contactsInfoWrapper}>
            <Box className={classes.contactsInfo}>
              <Link
                className={classes.contactsInfoLink}
                href="https://telegram.me/sigmastoune"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Typography className={classes.contactsInfoText} color="blue">
                  {SOCIAL_MEDIA_TELEGRAMM}
                </Typography>
              </Link>
              <Link
                className={classes.contactsInfoLink}
                href="https://vk.com/sigmastone"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Typography
                  className={classes.contactsInfoText}
                  color="darkblue"
                >
                  {SOCIAL_MEDIA_VK}
                </Typography>
              </Link>
              <Typography className={classes.contactsInfoText} color="gray">
                {EMAIL_TEXT}
              </Typography>
              <Typography className={classes.contactsInfoText} color="gray">
                {PHONE_NUMBER}
              </Typography>
            </Box>

            <Tabs
              className={classes.tabs}
              TabIndicatorProps={{
                style: { display: "none" },
              }}
              value={value}
              onChange={(e, value) => setValue(value)}
              variant="fullWidth"
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

            <Box className={classes.ourProductionContainer}>
              <Typography className={classes.ourProductionText}>
                {OUR_PRODUCTION_TEXT}
              </Typography>
            </Box>
          </Box>
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
