import React from "react";

import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";

import ImageSwiper from "components/ImageSwiper/ImageSwiper";

import { STONES_IMAGES, STONES_TITLE } from "constants/common.constants";

const useStyles = makeStyles(() => ({
  contentContainer: {
    margin: "50px 0",
    width: "100%",
  },
}));

const Stones = () => {
  const classes = useStyles();

  return (
    <Box className={classes.contentContainer}>
      <ImageSwiper images={STONES_IMAGES} title={STONES_TITLE} />
    </Box>
  );
};

export default Stones;
