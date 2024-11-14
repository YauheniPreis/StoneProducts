import React, { useState } from "react";

import Image from "next/image";
import { useRouter } from "next/router";

import { Box, Tab, Tabs, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

import {
  MAIN_IMAGE,
  PROMOTION_BUTTON_TEXT,
  TERMS_AND_CONDITIONS,
} from "constants/common.constants";

const useStyles = makeStyles((theme) => ({
  homeContainer: {
    display: "flex",
    width: "100%",
    height: "100%",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column-reverse",
    },
  },
  imageContainer: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "80vw",
    height: "80vh",
    [theme.breakpoints.down("lg")]: {
      width: "70vw",
      height: "70vh",
    },
    [theme.breakpoints.down("md")]: {
      width: "100%",
      height: "100%",
    },
  },
  image: {
    position: "relative !important" as any,
    objectFit: "cover",
    [theme.breakpoints.down("md")]: {
      objectFit: "contain",
    },
  },
  contentContainer: {
    padding: "20px 40px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "20vw",
    [theme.breakpoints.down("lg")]: {
      width: "30vw",
    },
    [theme.breakpoints.down("md")]: {
      width: "100vw",
    },
  },
  title: {
    fontSize: "28px",
    fontWeight: 700,
    textTransform: "uppercase",
    textAlign: "center",
    lineHeight: "45px",
    [theme.breakpoints.down("lg")]: {
      fontSize: "22px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "19px",
    },
  },
  tabs: {
    marginTop: "50px",
    display: "flex",
    [theme.breakpoints.down("md")]: {
      marginTop: "20px",
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: "0px",
    },
  },
  tab: {
    fontSize: "32px",
    fontWeight: 600,
    color: "#000",
    "&.Mui-selected": {
      color: "#ed1a1a",
    },
    [theme.breakpoints.down("lg")]: {
      padding: "4px 8px",
      fontSize: "25px",
    },
    [theme.breakpoints.down("sm")]: {
      margin: "10px 14px",
      fontSize: "22px",
    },
  },
}));

const Home = () => {
  const router = useRouter();
  const classes = useStyles();

  const [value, setValue] = useState(false);

  return (
    <Box className={classes.homeContainer}>
      <Box className={classes.imageContainer}>
        <Image
          className={classes.image}
          src={MAIN_IMAGE.imgPath}
          alt={MAIN_IMAGE.label}
          layout="fill"
          priority={true}
        />
      </Box>

      <Box className={classes.contentContainer}>
        <Typography className={classes.title} color="red">
          {PROMOTION_BUTTON_TEXT}
        </Typography>

        <Tabs
          className={classes.tabs}
          orientation="vertical"
          TabIndicatorProps={{
            style: { display: "none" },
          }}
          value={value}
          onChange={(e, value) => setValue(value)}
        >
          {TERMS_AND_CONDITIONS.map((page, index) => (
            <Tab
              key={index}
              className={classes.tab}
              label={page.title}
              onClick={() => router.push(page.link)}
            />
          ))}
        </Tabs>

        <Box />
      </Box>
    </Box>
  );
};

export default Home;
