import { useEffect, useRef } from "react";

import { ReadonlyURLSearchParams } from "next/navigation";

export const usePrevious = (value: string | ReadonlyURLSearchParams) => {
  const ref = useRef<string | ReadonlyURLSearchParams>(value);

  useEffect(() => {
    ref.current = value;
  });

  return ref.current;
};
