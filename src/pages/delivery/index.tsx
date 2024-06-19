import React from "react";

import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  contentContainer: {
    margin: "50px 20px",
    width: "100%",
    height: "60vh",
    [theme.breakpoints.down("sm")]: {
      height: "100%",
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
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "25px",
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
  );
};

export default Delivery;
