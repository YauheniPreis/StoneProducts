import * as React from "react";

import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";

import Footer from "components/Footer/Footer";
import Header from "components/Header/Header";

const useStyles = makeStyles(() => ({
  "@global": {
    body: {
      margin: 0,
    },
  },
  container: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  },
}));

const Home = () => {
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <Header />
      <Footer />
    </Box>
  );
};

export default Home;
