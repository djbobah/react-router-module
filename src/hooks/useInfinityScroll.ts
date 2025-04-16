import { useCallback, useRef } from "react";
import { UseInfinityScrollPropsType } from "../types";

export const useInfinityScroll = (props: UseInfinityScrollPropsType) => {
  const { isLoading, hasMore, setPageNumber } = props;
  const observer = useRef<IntersectionObserver | null>(null);

  const lastNodeRef = useCallback(
    (node: HTMLElement | null) => {
      if (isLoading) return;
      if (observer.current) {
        observer.current.disconnect();
      }

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore)
          setPageNumber((prevState) => prevState + 1);
      });

      if (node) {
        observer.current.observe(node);
      }
    },
    [isLoading, hasMore]
  );

  return {
    lastNodeRef,
  };
};
