import { useEffect, useState } from "react";
import { ListItem } from "../components/ListItem";
import { SortControl } from "../components/SortControl";
import Data from "../data/characters.json";
import { useLocation } from "react-router-dom";
import { CharactersCardType } from "../types";

export const Characters = () => {
  const [sort, setSort] = useState<"asc" | "desc">("asc");
  const [sortedData, setSortedData] = useState<CharactersCardType[]>(Data);
  const { search } = useLocation();

  useEffect(() => {
    sort === "asc"
      ? setSortedData(
          Data.sort((a, b) => {
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
          Data.sort((a, b) => {
            if (a.name.toLocaleLowerCase() < b.name.toLocaleLowerCase()) {
              return 1;
            }
            if (a.name.toLocaleLowerCase() > b.name.toLocaleLowerCase()) {
              return -1;
            }
            return 0;
          })
        );
  }, [search]);
  return (
    <>
      <h1>Персонажи</h1>
      <SortControl sort={sort} setSort={setSort} />

      {sortedData.map((item) => {
        return (
          <ListItem path={`/characters/${item.id}`} card={item} key={item.id} />
        );
      })}
    </>
  );
};
