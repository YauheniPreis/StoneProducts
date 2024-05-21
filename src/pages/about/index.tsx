import React, { useState } from "react";

import Image from "next/image";

import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { Box, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import SwipeableViews from "react-swipeable-views";

import { ABOUT_IMAGES } from "constants/common.constants";

const useStyles = makeStyles((theme) => ({
  swiperContainer: {
    margin: "50px 0",
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  leftArrowButtonContainer: {
    [theme.breakpoints.up("sm")]: {
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "center",
      width: "20%",
    },
    [theme.breakpoints.down("sm")]: {
      position: "absolute",
      left: "20px",
      zIndex: 10,
    },
  },
  leftArrowButton: {
    height: "50px",
    minWidth: "50px",
    borderRadius: "50%",
    backgroundColor: "#dddddd",
    color: "#fff",
    [theme.breakpoints.down("sm")]: {
      height: "40px",
      width: "40px",
      minWidth: "30px",
    },
    "&:hover": {
      backgroundColor: "#9a9a9a",
    },
  },
  rightArrowButtonContainer: {
    [theme.breakpoints.up("sm")]: {
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "center",
      width: "20%",
    },
    [theme.breakpoints.down("sm")]: {
      position: "absolute",
      right: "20px",
      zIndex: 10,
    },
  },
  rightArrowButton: {
    height: "50px",
    minWidth: "50px",
    borderRadius: "50%",
    backgroundColor: "#dddddd",
    color: "#fff",
    [theme.breakpoints.down("sm")]: {
      height: "40px",
      width: "40px",
      minWidth: "30px",
    },
    "&:hover": {
      backgroundColor: "#9a9a9a",
    },
  },
  swiper: {
    margin: "0 40px",
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      margin: "0px",
      width: "100%",
      minWidth: "0px",
    },
  },
  imageContainer: {
    position: "relative",
    height: "600px",
  },
}));

const About = () => {
  const theme = useTheme();
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);

  const maxSteps = ABOUT_IMAGES.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  return (
    <Box className={classes.swiperContainer}>
      <Box className={classes.leftArrowButtonContainer}>
        <Button
          className={classes.leftArrowButton}
          onClick={handleBack}
          disabled={activeStep === 0}
        >
          <ChevronLeft fontSize="large" />
        </Button>
      </Box>

      <Box className={classes.swiper}>
        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
        >
          {ABOUT_IMAGES.map((step, index) => (
            <div key={step.label} className={classes.imageContainer}>
              {Math.abs(activeStep - index) <= 2 ? (
                <Image
                  src={step.imgPath}
                  alt={step.label}
                  objectFit="contain"
                  fill
                />
              ) : null}
            </div>
          ))}
        </SwipeableViews>
      </Box>

      <Box className={classes.rightArrowButtonContainer}>
        <Button
          className={classes.rightArrowButton}
          onClick={handleNext}
          disabled={activeStep === maxSteps - 1}
        >
          <ChevronRight fontSize="large" />
        </Button>
      </Box>
    </Box>
  );
};

export default About;
