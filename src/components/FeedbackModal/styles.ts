import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  title: {
    position: "relative",
    textAlign: "center",
    fontSize: "36px",
    fontWeight: 600,
    textTransform: "uppercase",
    letterSpacing: "0.5px",
    lineHeight: 1.23,
    [theme.breakpoints.down("sm")]: {
      padding: "20px 20px 0",
      marginBottom: "6px",
      fontSize: "28px",
    },
  },
  closeButton: {
    margin: "5px 5px 0 auto",
    [theme.breakpoints.down("sm")]: {
      padding: 0,
    },
  },
  closeIcon: {
    height: "50px",
    width: "50px",
    color: "#000",
    [theme.breakpoints.down("sm")]: {
      height: "40px",
      width: "40px",
    },
  },
  content: {
    padding: "0 24px 20px",
    [theme.breakpoints.down("sm")]: {
      padding: "0 20px 20px",
    },
  },
  description: {
    textAlign: "center",
    fontSize: "16px",
    fontWeight: 300,
    color: "#000",
    lineHeight: 1.55,
    [theme.breakpoints.down("sm")]: {
      fontSize: "12px",
      lineHeight: 1.45,
    },
  },
  form: {
    margin: "20px",
    [theme.breakpoints.down("sm")]: {
      margin: "0",
      marginTop: "14px",
    },
  },
  button: {
    height: "54px",
    width: "100%",
    borderRadius: "6px",
  },
  buttonText: {
    fontSize: "16px",
    fontWeight: 600,
    color: "#ffffff",
  },
}));

export { useStyles };
