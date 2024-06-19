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
    [theme.breakpoints.down("md")]: {
      marginTop: "10px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "28px",
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
    [theme.breakpoints.down("md")]: {
      marginTop: "10px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "22px",
    },
  },
  span: {
    color: "red",
  },
}));

const Froze = () => {
  const classes = useStyles();

  return (
    <Box className={classes.contentContainer}>
      <Typography className={classes.title}>ЗАМЕР</Typography>
      <Typography className={classes.description}>
        Если предварительный расчёт и условия выполнения заказа Вас устроили,
        наступило время пригласить мастера по замеру. Это можно сделать на
        главной странице сайта{" "}
        <span className={classes.span}>«ЗАКАЗАТЬ ЗАМЕР»</span> либо договориться
        устно с менеджером. Мастер подъедет в удобное для Вас время с образцами
        камня и сделает точный обмер. Также Вы получите полную консультацию по
        всем вопросам (а они обязательно будут) и обсудит все нюансы будущего
        изделия. При необходимости, сделает шаблон, по которому будут работать
        мастера производства.{" "}
      </Typography>
    </Box>
  );
};

export default Froze;
