import React from "react";

import NextImage from "next/image";

import TelegramIcon from "@mui/icons-material/Telegram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import {
  Box,
  Divider,
  List,
  ListItemIcon,
  Stack,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";

import logoImage from "assets/logo.jpg";

const useStyles = makeStyles((theme) => ({
  footer: {
    borderTop: "1px solid #000",
    marginTop: "auto",
    backgroundColor: "#000",
  },
  footerCompanyInfoContainer: {
    padding: "40px 40px",
    [theme.breakpoints.down("sm")]: {
      padding: "25px 40px",
    },
  },
  footerCompanyInfo: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "center",
    gap: "256px",
    [theme.breakpoints.down("lg")]: {
      gap: "128px",
    },
    [theme.breakpoints.down("md")]: {
      gap: "64px",
    },
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      alignItems: "baseline",
      gap: "32px",
    },
  },
  footerCompanyInfoColumn: {
    display: "flex",
    flexDirection: "column",
  },
  footerCompanyInfoColumnTitle: {
    marginBottom: "20px",
    fontSize: "22px",
    fontWeight: 700,
    color: "#fff",
    [theme.breakpoints.down("sm")]: {
      marginBottom: "10px",
      fontSize: "17px",
    },
  },
  footerCompanyInfoColumnText: {
    fontSize: "15px",
    fontWeight: 400,
    color: "#fff",
    [theme.breakpoints.down("sm")]: {
      fontSize: "13px",
    },
  },
  footerCompanyIcon: {
    position: "relative",
    height: "90px",
    minWidth: "120px",
    [theme.breakpoints.down("sm")]: {
      height: "70px",
      minWidth: "100px",
    },
  },
  footerDivider: {
    backgroundColor: "#fff",
  },
  footerPolicyInfoContainer: {
    padding: "40px 40px",
    [theme.breakpoints.down("sm")]: {
      padding: "25px 40px",
    },
  },
  footerPolicyInfo: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      gap: "32px",
    },
  },
  footerPolicyText: {
    fontSize: "15px",
    fontWeight: 600,
    color: "#fff",
    [theme.breakpoints.down("sm")]: {
      fontSize: "13px",
    },
  },
  footerSocialMedias: {
    padding: 0,
  },
  footerSocialMediaIconContainer: {
    minWidth: 0,
    marginRight: 20,
    "&:last-child": {
      marginRight: "0",
    },
  },
  footerSocialMediaIcon: {
    height: 30,
    width: 30,
    color: "#fff",
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <Box className={classes.footer}>
      <Box className={classes.footerCompanyInfoContainer}>
        <Stack className={classes.footerCompanyInfo}>
          <Box className={classes.footerCompanyInfoColumn}>
            <Typography className={classes.footerCompanyInfoColumnTitle}>
              Контакты
            </Typography>

            <Box>
              <Typography className={classes.footerCompanyInfoColumnText}>
                +7 (925) 809-4985
              </Typography>
              <Typography className={classes.footerCompanyInfoColumnText}>
                yauheni.preis@gmail.com
              </Typography>
            </Box>
          </Box>

          <Box className={classes.footerCompanyInfoColumn}>
            <Typography className={classes.footerCompanyInfoColumnTitle}>
              Режим работы
            </Typography>
            <Typography className={classes.footerCompanyInfoColumnText}>
              Пн-Пт с 09:00 до 19:00
            </Typography>
          </Box>

          <Box className={classes.footerCompanyIcon}>
            <NextImage src={logoImage} fill alt="logo" />
          </Box>
        </Stack>
      </Box>

      <Divider className={classes.footerDivider} />

      <Box className={classes.footerPolicyInfoContainer}>
        <Stack className={classes.footerPolicyInfo}>
          <Typography className={classes.footerPolicyText}>
            Copyright © 2024 Sigma Stone
          </Typography>

          <List className={classes.footerSocialMedias}>
            <ListItemIcon className={classes.footerSocialMediaIconContainer}>
              <TelegramIcon className={classes.footerSocialMediaIcon} />
            </ListItemIcon>
            <ListItemIcon className={classes.footerSocialMediaIconContainer}>
              <WhatsAppIcon className={classes.footerSocialMediaIcon} />
            </ListItemIcon>
          </List>
        </Stack>
      </Box>
    </Box>
  );
};

export default Footer;
