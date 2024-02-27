import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  header: {
    display: "flex",
    justifyContent: "center",
    height: "84px",
    width: "100%",
    backgroundColor: "#fff",
  },
  toolBar: {
    padding: "0 20px",
    [theme.breakpoints.down("lg")]: {
      padding: "0 15px",
    },
  },
  tab: {
    fontSize: "15px",
    fontWeight: 600,
    color: "#000",
    "&.Mui-selected": {
      color: "#ed1a1a",
    },
    [theme.breakpoints.down("lg")]: {
      padding: "4px 8px",
      fontSize: "13px",
    },
  },
  button: {
    marginLeft: "auto",
    borderRadius: "5px",
    [theme.breakpoints.down("md")]: {
      marginTop: "5px",
    },
  },
  buttonText: {
    fontSize: "15px",
    fontWeight: 700,
    color: "#ffffff",
    [theme.breakpoints.down("lg")]: {
      fontSize: "13px",
    },
  },
  iconButton: {
    marginLeft: "auto",
    color: "#000",
  },
  logo: {
    marginRight: "10px",
    position: "relative",
    height: "58px",
    minWidth: "85px",
  },
}));

export { useStyles };
