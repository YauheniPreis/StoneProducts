import React from "react";

import NextImage from "next/image";
import Link from "next/link";

import TelegramIcon from "@mui/icons-material/Telegram";
import {
  Box,
  Divider,
  List,
  ListItemIcon,
  Stack,
  Typography,
} from "@mui/material";

import {
  CONTACTS_TITLE,
  COPYRIGHT_TEXT,
  EMAIL_TEXT,
  LOGO_IMAGE,
  OPERATING_MODE_TEXT,
  OPERATING_MODE_TITLE,
  PHONE_NUMBER,
} from "constants/common.constants";

import { useStyles } from "./styles";

const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Box className={classes.footerCompanyInfoContainer}>
        <Stack className={classes.footerCompanyInfo}>
          <Box className={classes.footerCompanyInfoColumn}>
            <Typography className={classes.footerCompanyInfoColumnTitle}>
              {CONTACTS_TITLE}
            </Typography>

            <Box>
              <Typography className={classes.footerCompanyInfoColumnText}>
                {PHONE_NUMBER}
              </Typography>
              <Typography className={classes.footerCompanyInfoColumnText}>
                {EMAIL_TEXT}
              </Typography>
            </Box>
          </Box>

          <Box className={classes.footerCompanyInfoColumn}>
            <Typography className={classes.footerCompanyInfoColumnTitle}>
              {OPERATING_MODE_TITLE}
            </Typography>
            <Typography className={classes.footerCompanyInfoColumnText}>
              {OPERATING_MODE_TEXT}
            </Typography>
          </Box>

          <Box className={classes.footerCompanyIcon}>
            <NextImage src={LOGO_IMAGE} fill alt="logo" />
          </Box>
        </Stack>
      </Box>

      <Divider className={classes.footerDivider} />

      <Box className={classes.footerPolicyInfoContainer}>
        <Stack className={classes.footerPolicyInfo}>
          <Typography className={classes.footerPolicyText}>
            {COPYRIGHT_TEXT}
          </Typography>

          <List className={classes.footerSocialMedias}>
            <ListItemIcon className={classes.footerSocialMediaIconContainer}>
              <Link
                className={classes.footerSocialMediaLink}
                href="https://telegram.me/sigmastoune"
                rel="noopener noreferrer"
                target="_blank"
              >
                <TelegramIcon className={classes.footerSocialMediaIcon} />
              </Link>
            </ListItemIcon>
          </List>
        </Stack>
      </Box>
    </footer>
  );
};

export default Footer;
