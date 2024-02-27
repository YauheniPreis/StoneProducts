import React from "react";

import type { AppProps } from "next/app";

import { CssBaseline } from "@mui/material";
import { AppCacheProvider } from "@mui/material-nextjs/v14-pagesRouter";
import { Theme, createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/styles";

import Layout from "components/Layout/Layout";

declare module "@mui/styles/defaultTheme" {
  // eslint-disable-next-line no-unused-vars
  interface DefaultTheme extends Theme {}
}

const theme = createTheme();

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <AppCacheProvider {...pageProps}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </AppCacheProvider>
  );
};

export default App;
