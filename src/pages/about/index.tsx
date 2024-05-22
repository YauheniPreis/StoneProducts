import React from "react";

import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";

import ImageSwiper from "components/ImageSwiper/ImageSwiper";

import { ABOUT_IMAGES, ABOUT_TITLE } from "constants/common.constants";

const useStyles = makeStyles(() => ({
  contentContainer: {
    margin: "50px 0",
    width: "100%",
  },
}));

const About = () => {
  const classes = useStyles();

  return (
    <Box className={classes.contentContainer}>
      <ImageSwiper images={ABOUT_IMAGES} title={ABOUT_TITLE} />
    </Box>
  );
};

export default About;
