import React from "react";

import Image from "next/image";

import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

import { FROZE_IMAGE } from "constants/common.constants";

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
      fontSize: "24px",
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
    <Box className={classes.homeContainer}>
      <Box className={classes.imageContainer}>
        <Image
          className={classes.image}
          src={FROZE_IMAGE.imgPath}
          alt={FROZE_IMAGE.label}
          layout="fill"
        />
      </Box>

      <Box className={classes.contentContainer}>
        <Typography className={classes.title}>ЗАМЕР</Typography>
        <Typography className={classes.description}>
          Если предварительный расчёт и условия выполнения заказа Вас устроили,
          наступило время пригласить мастера по замеру. Это можно сделать на
          главной странице сайта{" "}
          <span className={classes.span}>«ЗАКАЗАТЬ ЗАМЕР»</span> либо
          договориться устно с менеджером. Мастер подъедет в удобное для Вас
          время с образцами камня и сделает точный обмер. Также Вы получите
          полную консультацию по всем вопросам (а они обязательно будут) и
          обсудит все нюансы будущего изделия. При необходимости, сделает
          шаблон, по которому будут работать мастера производства.{" "}
        </Typography>
      </Box>
    </Box>
  );
};

export default Froze;
