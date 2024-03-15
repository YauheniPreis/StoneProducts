import React, { useState } from "react";

import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { Box, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import SwipeableViews from "react-swipeable-views";

const useStyles = makeStyles((theme) => ({
  swiperContainer: {
    margin: "50px 0",
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "600px",
  },
  leftArrowButtonContainer: {
    [theme.breakpoints.up("sm")]: {
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "center",
      width: "20%",
      height: "100%",
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
      height: "100%",
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
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    width: "60%",
    minWidth: "400px",
    [theme.breakpoints.down("sm")]: {
      margin: "0px",
      width: "100%",
      minWidth: "0px",
    },
  },
  imageContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    backgroundPosition: "center center",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    [theme.breakpoints.down("sm")]: {
      height: "100%",
      width: "100%",
    },
  },
}));

const images = [
  {
    label: "San Francisco – Oakland Bay Bridge, United States",
    imgPath:
      "https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60",
  },
  {
    label: "Bird",
    imgPath:
      "https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60",
  },
  {
    label: "Bali, Indonesia",
    imgPath:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250",
  },
  {
    label: "Goč, Serbia",
    imgPath:
      "https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60",
  },
];

const Stones = () => {
  const theme = useTheme();
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);

  const maxSteps = images.length;

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
          {images.map((step, index) => (
            <div key={step.label} className={classes.imageContainer}>
              {Math.abs(activeStep - index) <= 2 ? (
                <Box
                  className={classes.image}
                  component="img"
                  src={step.imgPath}
                  alt={step.label}
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

export default Stones;
