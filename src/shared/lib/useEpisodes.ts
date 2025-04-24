import axios from "axios";
import { useEffect, useState } from "react";
import { useData } from "../context/DataProvider";

export const useEpisodes = (pageNumber: number) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const { episodes, setEpisodes } = useData();
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setIsError(false);
    axios({
      method: "GET",
      url: "https://rickandmortyapi.com/api/episode",
      params: { page: pageNumber },
    })
      .then((res) => {
        setEpisodes((prevState) => [
          ...new Map(
            [...(prevState || []), ...res.data.results].map((item) => [
              item.id,
              item,
            ])
          ).values(),
        ]);
        setHasMore(res.data.results.length > 0);
        setIsLoading(false);
      })
      .catch((e) => {
        console.log("Ошибка в запросе", e);
        setIsError(true);
      });
  }, [pageNumber]);

  return {
    isLoading,
    isError,
    episodes,
    hasMore,
  };
};
