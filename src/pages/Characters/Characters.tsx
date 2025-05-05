import { useEffect, useState } from "react";
import { ListItem } from "../../entities/ui/ListItem";
import { SortControl } from "../../features/SortButton";
import { useLocation } from "react-router-dom";
import { CharactersCardType } from "../../shared/types";
import { useCharacters } from "../../shared/lib/useCharacters";
import { useInfinityScroll } from "../../shared/lib/useInfinityScroll";
import { Loader, Title } from "@mantine/core";

export const Characters = () => {
  const [sort, setSort] = useState<"asc" | "desc">("asc");
  const [pageNumber, setPageNumber] = useState(1);
  const [sortedData, setSortedData] = useState<CharactersCardType[]>([]);
  const { search } = useLocation();

  const { isLoading, isError, characters, hasMore } = useCharacters(pageNumber);

  useEffect(() => {
    if (characters)
      sort === "asc"
        ? setSortedData(
            characters.sort((a, b) => {
              if (a.name.toLocaleLowerCase() > b.name.toLocaleLowerCase()) {
                return 1;
              }
              if (a.name.toLocaleLowerCase() < b.name.toLocaleLowerCase()) {
                return -1;
              }
              return 0;
            })
          )
        : setSortedData(
            characters.sort((a, b) => {
              if (a.name.toLocaleLowerCase() < b.name.toLocaleLowerCase()) {
                return 1;
              }
              if (a.name.toLocaleLowerCase() > b.name.toLocaleLowerCase()) {
                return -1;
              }
              return 0;
            })
          );
  }, [characters, search]);

  const { lastNodeRef } = useInfinityScroll({
    isLoading,
    hasMore,
    setPageNumber,
  });

  return (
    <>
      <Title order={2} mt={30} mb={20}>
        Персонажи
      </Title>
      <SortControl sort={sort} setSort={setSort} />

      {sortedData.map((item, index) => {
        if (sortedData.length === index + 1) {
          return (
            <ListItem
              ref={lastNodeRef}
              path={`/characters/${item.id}`}
              card={item}
              num={index + 1}
              key={item.id}
            />
          );
        } else {
          return (
            <ListItem
              path={`/characters/${item.id}`}
              card={item}
              num={index + 1}
              key={item.id}
            />
          );
        }
      })}
      {isLoading && <Loader color="blue" size={20} />}
      {isError && <div>Error...</div>}
    </>
  );
};
