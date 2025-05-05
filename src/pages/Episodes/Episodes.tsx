import { useState } from "react";
import { ListItem } from "../../entities/ui/ListItem";
import { useEpisodes } from "../../shared/lib/useEpisodes";
import { useInfinityScroll } from "../../shared/lib/useInfinityScroll";
import { Title } from "@mantine/core";

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
      <Title order={2} mt={30}>
        Эпизоды
      </Title>
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
