import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  container: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  },
  main: {
    flexGrow: 1,
  },
}));

export { useStyles };
