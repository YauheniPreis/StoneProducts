import React from "react";

import Image from "next/image";

import { Box, Button, List, ListItem, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

import {
  BENEFITS,
  CALCULATE_COST_BUTTON_TEXT,
  MAIN_IMAGE,
  MAIN_TITLE,
} from "constants/common.constants";

const useStyles = makeStyles((theme) => ({
  homeContainer: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column-reverse",
    },
  },
  imageContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "50%",
    height: "100%",
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
  },
  image: {
    position: "relative !important" as any,
  },
  contentContainer: {
    padding: "20px 40px",
    display: "flex",
    flexDirection: "column",
    width: "50%",
    height: "100%",
    [theme.breakpoints.down("md")]: {
      alignItems: "center",
      width: "100%",
    },
  },
  title: {
    fontSize: "32px",
    fontWeight: 700,
    textTransform: "uppercase",
    lineHeight: "45px",
    color: "#000",
    [theme.breakpoints.down("lg")]: {
      fontSize: "25px",
    },
    [theme.breakpoints.down("md")]: {
      textAlign: "center",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "20px",
    },
  },
  list: {
    padding: "25px 25px",
  },
  listItem: {
    padding: "0",
    marginBottom: "15px",
    "&:last-child": {
      marginBottom: "0",
    },
  },
  listItemText: {
    fontSize: "17px",
    fontWeight: 400,
    color: "#000",
    [theme.breakpoints.down("sm")]: {
      fontSize: "14px",
    },
  },
  button: {
    height: "55px",
    width: "380px",
    borderRadius: "6px",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  buttonText: {
    fontSize: "15px",
    fontWeight: 600,
    lineHeight: 1.55,
    color: "#ffffff",
    [theme.breakpoints.down("sm")]: {
      fontSize: "13px",
    },
  },
}));

const Home = () => {
  const classes = useStyles();

  return (
    <Box className={classes.homeContainer}>
      <Box className={classes.imageContainer}>
        <Image
          className={classes.image}
          src={MAIN_IMAGE.imgPath}
          alt={MAIN_IMAGE.label}
          objectFit="contain"
          fill
        />
      </Box>

      <Box className={classes.contentContainer}>
        <Typography className={classes.title}>{MAIN_TITLE}</Typography>
        <List className={classes.list}>
          {BENEFITS.map((text, index) => (
            <ListItem key={index} className={classes.listItem}>
              <Typography className={classes.listItemText}>{text}</Typography>
            </ListItem>
          ))}
        </List>
        <Button
          variant="contained"
          size="large"
          color="error"
          className={classes.button}
        >
          <Typography className={classes.buttonText}>
            {CALCULATE_COST_BUTTON_TEXT}
          </Typography>
        </Button>
      </Box>
    </Box>
  );
};

export default Home;
