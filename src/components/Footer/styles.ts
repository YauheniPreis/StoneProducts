import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  footer: {
    borderTop: "1px solid #000",
    backgroundColor: "#000",
  },
  footerCompanyInfoContainer: {
    padding: "40px 40px",
    [theme.breakpoints.down("sm")]: {
      padding: "25px 40px",
    },
  },
  footerCompanyInfo: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "center",
    gap: "256px",
    [theme.breakpoints.down("lg")]: {
      gap: "128px",
    },
    [theme.breakpoints.down("md")]: {
      gap: "64px",
    },
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      alignItems: "baseline",
      gap: "32px",
    },
  },
  footerCompanyInfoColumn: {
    display: "flex",
    flexDirection: "column",
  },
  footerCompanyInfoColumnTitle: {
    marginBottom: "20px",
    fontSize: "22px",
    fontWeight: 700,
    color: "#fff",
    [theme.breakpoints.down("sm")]: {
      marginBottom: "10px",
      fontSize: "17px",
    },
  },
  footerCompanyInfoColumnText: {
    fontSize: "15px",
    fontWeight: 400,
    color: "#fff",
    [theme.breakpoints.down("sm")]: {
      fontSize: "13px",
    },
  },
  footerCompanyIcon: {
    position: "relative",
    height: "90px",
    minWidth: "120px",
    [theme.breakpoints.down("sm")]: {
      height: "70px",
      minWidth: "100px",
    },
  },
  footerDivider: {
    backgroundColor: "#fff",
  },
  footerPolicyInfoContainer: {
    padding: "40px 40px",
    [theme.breakpoints.down("sm")]: {
      padding: "25px 40px",
    },
  },
  footerPolicyInfo: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      gap: "32px",
    },
  },
  footerPolicyText: {
    fontSize: "15px",
    fontWeight: 600,
    color: "#fff",
    [theme.breakpoints.down("sm")]: {
      fontSize: "13px",
    },
  },
  footerSocialMedias: {
    padding: 0,
  },
  footerSocialMediaIconContainer: {
    minWidth: 0,
    marginRight: 20,
    "&:last-child": {
      marginRight: "0",
    },
  },
  footerSocialMediaIcon: {
    height: 30,
    width: 30,
    color: "#fff",
  },
}));

export { useStyles };
