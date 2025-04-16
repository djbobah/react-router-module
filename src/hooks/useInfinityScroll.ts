import { useCallback, useEffect, useRef } from "react";
import { UseInfinityScrollPropsType } from "../types";

export const useInfinityScroll = (props: UseInfinityScrollPropsType) => {
  const { isLoading, hasMore, setPageNumber } = props;
  const observer = useRef<IntersectionObserver | null>(null);

  const isLoadingRef = useRef(isLoading);
  const hasMoreRef = useRef(hasMore);

  // Обновляем ref при изменении состояний
  useEffect(() => {
    isLoadingRef.current = isLoading;
    hasMoreRef.current = hasMore;
  }, [isLoading, hasMore]);

  // Очистка observer при размонтировании
  useEffect(() => {
    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, []);

  const lastNodeRef = useCallback(
    (node: HTMLElement | null) => {
      if (isLoadingRef.current) return;
      if (observer.current) {
        observer.current.disconnect();
      }

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMoreRef.current)
          setPageNumber((prevState) => prevState + 1);
      });

      if (node) {
        observer.current.observe(node);
      }
    },
    [setPageNumber]
  );

  return {
    lastNodeRef,
  };
};
