import { useState } from "react";
import { ListItem } from "../../entities/ui/ListItem";
import { useLocations } from "../../shared/lib/useLocations";
import { useInfinityScroll } from "../../shared/lib/useInfinityScroll";
import { Title } from "@mantine/core";

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
      <Title order={2} mt={30}>
        Локации
      </Title>
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
