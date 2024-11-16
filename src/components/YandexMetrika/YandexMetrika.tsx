import { useCallback, useEffect, useRef } from "react";

import { usePathname, useSearchParams } from "next/navigation";

import { usePrevious } from "hooks/usePrevious";

export const enableYM =
  process.env.NODE_ENV === "production" && process.env.YM_ID;

const YandexMetrika = () => {
  const isFirst = useRef(true);

  const pathname = usePathname();
  const prevPathname = usePrevious(pathname);

  const searchParams = useSearchParams();
  const prevSearchParams = usePrevious(searchParams);

  const hit = useCallback((url: string) => {
    if (enableYM) {
      //   ym(process.env.YM_ID, "hit", url);
    }
  }, []);

  useEffect(() => {
    let url = window.origin + pathname;
    if (searchParams?.toString()) {
      url = url + `?${searchParams.toString()}`;
    }
    if (isFirst.current) {
      isFirst.current = false;
      hit(url);
    } else if (
      searchParams?.toString() !== prevSearchParams?.toString() ||
      pathname !== prevPathname
    ) {
      hit(url);
    }
  }, [pathname, prevPathname, prevSearchParams, hit, searchParams]);

  return null;
};

export default YandexMetrika;
