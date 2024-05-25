import React, { useState } from "react";

import Image from "next/image";

import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import SwipeableViews from "react-swipeable-views";

import { useStyles } from "./styles";

interface IImage {
  label: string;
  imgPath: string;
}

interface IImageSwiperProps {
  title: string;
  images: IImage[];
}

const ImageSwiper = ({ images, title }: IImageSwiperProps) => {
  const theme = useTheme();
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState<number>(0);

  const maxSteps = images.length;

  const handleNext = (): void => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = (): void => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step: number): void => {
    setActiveStep(step);
  };

  return (
    <>
      <Typography className={classes.title}>{title}</Typography>
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
    </>
  );
};

export default ImageSwiper;
