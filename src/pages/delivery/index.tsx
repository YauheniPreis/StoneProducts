import React from "react";

import Image from "next/image";

import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

import { DELIVERY_IMAGE } from "constants/common.constants";

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
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "50vw",
    height: "80vh",
    [theme.breakpoints.down("lg")]: {
      height: "85vh",
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
    padding: "0px 20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "50vw",
    [theme.breakpoints.down("md")]: {
      padding: "20px 40px",
      width: "100%",
    },
  },
  title: {
    marginTop: "30px",
    textAlign: "center",
    fontSize: "36px",
    fontWeight: 600,
    textTransform: "uppercase",
    letterSpacing: "0.5px",
    lineHeight: 1.23,
    [theme.breakpoints.down("lg")]: {
      marginTop: "15px",
      fontSize: "30px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "28px",
    },
  },
  subTitle: {
    marginTop: "30px",
    textAlign: "center",
    fontSize: "33px",
    fontWeight: 500,
    textTransform: "uppercase",
    letterSpacing: "0.5px",
    lineHeight: 1.23,
    color: "red",
    [theme.breakpoints.down("lg")]: {
      marginTop: "15px",
      fontSize: "26px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "23px",
    },
  },
  description: {
    marginTop: "30px",
    textAlign: "center",
    fontSize: "30px",
    fontWeight: 400,
    letterSpacing: "0.5px",
    lineHeight: 1.23,
    [theme.breakpoints.down("lg")]: {
      marginTop: "15px",
      fontSize: "24px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "22px",
    },
  },
  span: {
    color: "red",
  },
}));

const Delivery = () => {
  const classes = useStyles();

  return (
    <Box className={classes.homeContainer}>
      <Box className={classes.imageContainer}>
        <Image
          className={classes.image}
          src={DELIVERY_IMAGE.imgPath}
          alt={DELIVERY_IMAGE.label}
          layout="fill"
        />
      </Box>

      <Box className={classes.contentContainer}>
        <Typography className={classes.title}>ДОСТАВКА</Typography>
        <Typography className={classes.subTitle}>
          ДОСТАВКА ПО МОСКВЕ ВКЛЮЧЕНА В СТОМОСТЬ ЗАКАЗА.
        </Typography>
        <Typography className={classes.description}>
          Мы заранее свяжемся с Вами и договоримся о дне доставки и установки.
          Стоимость подъёма на этаж в доме без лифта оговаривается на замере.
        </Typography>
      </Box>
    </Box>
  );
};

export default Delivery;
