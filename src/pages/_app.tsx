import React from "react";
import type { AppProps } from "next/app";
import { AppCacheProvider } from "@mui/material-nextjs/v14-pagesRouter";
import { createTheme, Theme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/styles";

declare module "@mui/styles/defaultTheme" {
  // eslint-disable-next-line no-unused-vars
  interface DefaultTheme extends Theme {}
}

const theme = createTheme();

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <AppCacheProvider {...pageProps}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </AppCacheProvider>
  );
};

export default App;
