import { useState } from "react";
import { ListItem } from "../components/ListItem";
import { useLocations } from "../hooks/useLocations";
import { useInfinityScroll } from "../hooks/useInfinityScroll";

export const Locations = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const { isLoading, isError, locations, hasMore } = useLocations(pageNumber);

  const { lastNodeRef } = useInfinityScroll({
    isLoading,
    hasMore,
    setPageNumber,
  });

  return (
    <>
      <h1>Локации</h1>
      {locations &&
        locations.map((item, index) => {
          if (locations.length === index + 1) {
            return (
              <ListItem
                ref={lastNodeRef}
                num={index + 1}
                path={`/locations/${item.id}`}
                card={item}
                key={item.id}
              />
            );
          } else {
            return (
              <ListItem
                num={index + 1}
                path={`/locations/${item.id}`}
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
