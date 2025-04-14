import { useState } from "react";
import { ListItem } from "../components/ListItem";
import { useEpisodes } from "../hooks/useEpisodes";
import { useInfinityScroll } from "../hooks/useInfinityScroll";

export const Episodes = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const { isLoading, isError, episodes, hasMore } = useEpisodes(pageNumber);

  const { lastNodeRef } = useInfinityScroll({
    isLoading,
    hasMore,
    setPageNumber,
  });

  return (
    <>
      <h1>Эпизоды</h1>
      {episodes &&
        episodes.map((item, index) => {
          if (episodes.length === index + 1) {
            return (
              <ListItem
                ref={lastNodeRef}
                num={index + 1}
                path={`/episodes/${item.id}`}
                card={item}
                key={item.id}
              />
            );
          } else {
            return (
              <ListItem
                num={index + 1}
                path={`/episodes/${item.id}`}
                card={item}
                key={item.id}
              />
            );
          }
        })}
      {isLoading && <div>Loading...</div>}
      {isError && <div>Error...</div>}
    </>
  );
};
