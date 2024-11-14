import React, { PropsWithChildren, useCallback, useEffect } from "react";

import { usePathname, useSearchParams } from "next/navigation";
import { Router } from "next/router";

import ym, { YMInitializer } from "react-yandex-metrika";

export const enableYM =
  process.env.NODE_ENV === "production" && process.env.YM_ID;

const YandexMetrika = ({ children }: PropsWithChildren) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const hit = useCallback((url: string) => {
    if (enableYM) {
      ym("hit", url);
    }
  }, []);

  useEffect(() => {
    hit(`${pathname}?${searchParams}`);
    Router.events.on("routeChangeComplete", (url: string) => hit(url));
  }, []);

  return (
    <>
      {enableYM && (
        <YMInitializer
          accounts={[Number(process.env.YM_ID)]}
          options={{
            defer: true,
            clickmap: true,
            trackLinks: true,
            accurateTrackBounce: true,
          }}
          version="2"
        />
      )}
      {children}
    </>
  );
};

export default YandexMetrika;
