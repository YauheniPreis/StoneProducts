import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  drawer: {
    backgroundColor: "#fff",
    maxWidth: "300px",
    width: "100%",
  },
  iconButton: {
    margin: "5px 5px 0 auto",
    color: "#000",
  },
  list: {
    padding: "0 25px 25px",
  },
  listItemButton: {
    padding: "0",
    marginBottom: "15px",
    "&:last-child": {
      marginBottom: "0",
    },
  },
  listItemText: {
    fontSize: "20px",
    fontWeight: 600,
  },
  footer: {
    marginTop: "auto",
    padding: "0 25px 25px",
    textAlign: "center",
  },
  footerButton: {
    height: "60px",
    width: "100%",
    borderRadius: "6px",
  },
  footerButtoText: {
    fontSize: "15px",
    fontWeight: 600,
    color: "#ffffff",
  },
});

export { useStyles };
