import { ListItem } from "../components/ListItem";
import Data from "../data/characters.json";

export const Characters = () => {
  return (
    <>
      <h1>Персонажи</h1>
      {Data.map((item) => {
        return (
          <ListItem path={`/characters/${item.id}`} card={item} key={item.id} />
        );
      })}
    </>
  );
};
