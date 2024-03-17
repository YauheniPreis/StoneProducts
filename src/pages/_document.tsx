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

import {
  DocumentHeadTags,
  DocumentHeadTagsProps,
  documentGetInitialProps,
} from "@mui/material-nextjs/v14-pagesRouter";
import { ServerStyleSheets as JSSServerStyleSheets } from "@mui/styles";

const Document = (props: DocumentProps & DocumentHeadTagsProps) => {
  return (
    <Html>
      <Head>
        <DocumentHeadTags {...props} />
      </Head>
      <body>
        <Main />
        <NextScript />
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
