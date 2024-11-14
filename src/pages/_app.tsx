import React, { useEffect } from "react";

import type { AppProps } from "next/app";
import dynamic from "next/dynamic";

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
const YandexMetrika = dynamic(
  () => import("components/YandexMetrika/YandexMetrika"),
  {
    ssr: false,
  }
);

const App = ({ Component, pageProps, ...props }: AppProps) => {
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles: Element | null =
      document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles?.parentElement?.removeChild(jssStyles);
    }
  }, []);

  return (
    <AppCacheProvider {...props}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <YandexMetrika>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </YandexMetrika>
      </ThemeProvider>
    </AppCacheProvider>
  );
};

export default App;
