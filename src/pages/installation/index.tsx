import React from "react";

import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  contentContainer: {
    margin: "50px 20px",
    width: "100%",
    height: "60vh",
    [theme.breakpoints.down("md")]: {
      height: "70vh",
    },
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
  note: {
    marginTop: "30px",
    textAlign: "center",
    fontSize: "20px",
    fontWeight: 400,
    letterSpacing: "0.5px",
    lineHeight: 1.23,
    [theme.breakpoints.down("lg")]: {
      marginTop: "15px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "16px",
    },
  },
  span: {
    color: "red",
  },
}));

const Installation = () => {
  const classes = useStyles();

  return (
    <Box className={classes.contentContainer}>
      <Typography className={classes.title}>УСТАНОВКА</Typography>
      <Typography className={classes.description}>
        После того как Ваш заказ изготовлен, пришла пора установить изделие на
        его постоянное место. Мы заранее обговариваем с Вами день установки. К
        Вам приезжает специалист по монтажу и проводит все работы по установке
        готового изделия. По завершении монтажа мастер проводит финишную
        полировку. <span className={classes.span}>Дополнительно</span> можем
        установить и подключить сантехнику, варочную панель, духовой шкаф,
        микроволновую печь.
      </Typography>
      <Typography className={classes.subTitle}>
        И ВОТ ПРИШЛО ВРЕМЯ ХОРОШЕГО НАСТРОЕНИЯ И СЧАСТЬЯ. ПОЛЬЗУЙТЕСЬ НА
        ЗДОРОВЬЕ!
      </Typography>
      <Typography className={classes.note}>
        *мы не оставляем за собой грязь
      </Typography>
    </Box>
  );
};

export default Installation;
