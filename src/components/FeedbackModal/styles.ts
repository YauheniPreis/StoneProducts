import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  title: {
    position: "relative",
    textAlign: "center",
    fontSize: "36px",
    fontWeight: 600,
    textTransform: "uppercase",
    letterSpacing: "0.5px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "28px",
    },
  },
  closeButton: {
    margin: "5px 5px 0 auto",
    color: "#000",
  },
  description: {
    margin: "0 30px",
    textAlign: "center",
    fontSize: "16px",
    fontWeight: 400,
    color: "#000",
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
