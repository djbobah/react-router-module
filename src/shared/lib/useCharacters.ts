import axios from "axios";
import { useEffect, useState } from "react";
import { useData } from "../context/DataProvider";

export const useCharacters = (pageNumber: number) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const { characters, setCharacters } = useData();
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setIsError(false);
    axios({
      method: "GET",
      url: "https://rickandmortyapi.com/api/character",
      params: { page: pageNumber },
    })
      .then((res) => {
        setCharacters((prevState) => [
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
    characters,
    hasMore,
  };
};
