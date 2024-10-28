import React, { Children, ComponentType } from "react";

import { AppProps } from "next/app";
import {
  DocumentContext,
  DocumentInitialProps,
  DocumentProps,
  Head,
  Html,
  Main,
  NextScript,
} from "next/document";
import Script from "next/script";

import {
  DocumentHeadTags,
  DocumentHeadTagsProps,
  documentGetInitialProps,
} from "@mui/material-nextjs/v14-pagesRouter";
import { ServerStyleSheets as JSSServerStyleSheets } from "@mui/styles";

import { BASE_METADATA } from "constants/common.constants";

const Document = (props: DocumentProps & DocumentHeadTagsProps) => {
  return (
    <Html>
      <Head>
        <DocumentHeadTags {...props} />
        <title>{BASE_METADATA.title}</title>
        <meta name="keywords" content={BASE_METADATA.keywords} />
      </Head>
      <body>
        <Main />
        <NextScript />
        <Script id="live-internet-counter" strategy="afterInteractive">
          {`new Image().src = "https://counter.yadro.ru/hit?r"+
            escape(document.referrer)+((typeof(screen)=="undefined")?"":
            ";s"+screen.width+"*"+screen.height+"*"+(screen.colorDepth?
            screen.colorDepth:screen.pixelDepth))+";u"+escape(document.URL)+
            ";h"+escape(document.title.substring(0,150))+
            ";"+Math.random();`}
        </Script>
      </body>
    </Html>
  );
};

export default Document;

Document.getInitialProps = async (ctx: DocumentContext) => {
  const jssSheets = new JSSServerStyleSheets();

  const finalProps = await documentGetInitialProps(ctx, {
    plugins: [
      {
        enhanceApp: (App: ComponentType<AppProps>) =>
          function EnhanceApp(props: AppProps) {
            return jssSheets.collect(<App {...props} />);
          },
        resolveProps: async (initialProps: DocumentInitialProps) => {
          const css = jssSheets.toString();

          return {
            ...initialProps,
            styles: [
              ...(Array.isArray(initialProps.styles)
                ? initialProps.styles
                : [initialProps.styles]),
              <style
                id="jss-server-side"
                key="jss-server-side"
                dangerouslySetInnerHTML={{ __html: css }}
              />,
              ...Children.toArray(initialProps.styles),
            ],
          };
        },
      },
    ],
  });

  return finalProps;
};
