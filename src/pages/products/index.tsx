import React from "react";

import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";

import ImageSwiper from "components/ImageSwiper/ImageSwiper";

import {
  PRODUCTS_BAR_COUNTER_IMAGES,
  PRODUCTS_BAR_COUNTER_TITLE,
  PRODUCTS_BATHROOM_IMAGES,
  PRODUCTS_BATHROOM_TITLE,
  PRODUCTS_KITCHEN_IMAGES,
  PRODUCTS_KITCHEN_TITLE,
  PRODUCTS_WINDOW_SILLS_IMAGES,
  PRODUCTS_WINDOW_SILLS_TITLE,
} from "constants/common.constants";

const useStyles = makeStyles((theme) => ({
  contentContainer: {
    margin: "50px 0",
    width: "100%",
  },
  content: {
    width: "100%",
    marginBottom: "50px",
    "&:last-child": {
      marginBottom: "0",
    },
    [theme.breakpoints.down("sm")]: {
      marginBottom: "20px",
    },
  },
}));

const Products = () => {
  const classes = useStyles();

  return (
    <Box className={classes.contentContainer}>
      <Box className={classes.content}>
        <ImageSwiper
          images={PRODUCTS_BAR_COUNTER_IMAGES}
          title={PRODUCTS_BAR_COUNTER_TITLE}
        />
      </Box>

      <Box className={classes.content}>
        <ImageSwiper
          images={PRODUCTS_BATHROOM_IMAGES}
          title={PRODUCTS_BATHROOM_TITLE}
        />
      </Box>

      <Box className={classes.content}>
        <ImageSwiper
          images={PRODUCTS_KITCHEN_IMAGES}
          title={PRODUCTS_KITCHEN_TITLE}
        />
      </Box>

      <Box className={classes.content}>
        <ImageSwiper
          images={PRODUCTS_WINDOW_SILLS_IMAGES}
          title={PRODUCTS_WINDOW_SILLS_TITLE}
        />
      </Box>
    </Box>
  );
};

export default Products;
