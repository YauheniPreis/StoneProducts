import React from "react";

import Footer from "components/Footer/Footer";
import Header from "components/Header/Header";

import { useStyles } from "./styles";

interface ILayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: ILayoutProps) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Header />
      <main className={classes.main}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
