import { ListItem } from "../components/ListItem";
import Data from "../data/location.json";

export const Locations = () => {
  return (
    <>
      <h1>Локации</h1>
      {Data.map((item) => {
        return (
          <ListItem path={`/locations/${item.id}`} card={item} key={item.id} />
        );
      })}
    </>
  );
};
