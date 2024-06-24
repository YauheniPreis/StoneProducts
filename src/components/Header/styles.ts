import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  header: {
    display: "flex",
    justifyContent: "center",
    height: "100px",
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
    display: "inline-flex",
    marginLeft: "auto",
    borderRadius: "5px",
    [theme.breakpoints.down("md")]: {
      display: "none",
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
  contactsInfoWrapper: {
    display: "flex",
    flexDirection: "column",
    width: "60%",
    [theme.breakpoints.down("md")]: {
      width: "0",
    },
  },
  contactsInfo: {
    marginLeft: "16px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    [theme.breakpoints.down("lg")]: {
      marginLeft: "0",
    },
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  contactsInfoLink: {
    textDecoration: "none",
  },
  contactsInfoText: {
    fontSize: "15px",
    fontWeight: 600,
    [theme.breakpoints.down("lg")]: {
      padding: "4px 8px",
      fontSize: "13px",
    },
  },
  tabs: {
    display: "flex",
    width: "100%",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  iconButton: {
    display: "block",
    marginLeft: "auto",
    color: "#000",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  logo: {
    marginRight: "10px",
    position: "relative",
    height: "74px",
    minWidth: "101px",
  },
}));

export { useStyles };
