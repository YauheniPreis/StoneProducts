import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  title: {
    marginBottom: "30px",
    textAlign: "center",
    fontSize: "36px",
    fontWeight: 600,
    textTransform: "uppercase",
    letterSpacing: "0.5px",
    lineHeight: 1.23,
    [theme.breakpoints.down("lg")]: {
      marginBottom: "15px",
    },
    [theme.breakpoints.down("md")]: {
      marginBottom: "10px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "28px",
    },
  },
  swiperContainer: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
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
    [theme.breakpoints.down("lg")]: {
      height: "500px",
    },
    [theme.breakpoints.down("md")]: {
      height: "400px",
    },
  },
}));

export { useStyles };
