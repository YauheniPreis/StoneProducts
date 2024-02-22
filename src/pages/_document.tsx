import React from "react";

import {
  DocumentHeadTags,
  documentGetInitialProps,
} from "@mui/material-nextjs/v14-pagesRouter";
import type { DocumentHeadTagsProps } from "@mui/material-nextjs/v14-pagesRouter";
import {
  DocumentContext,
  DocumentProps,
  Head,
  Html,
  Main,
  NextScript,
} from "next/document";

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
  const finalProps = await documentGetInitialProps(ctx);
  return finalProps;
};
