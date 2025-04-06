import { ListItem } from "../components/ListItem";
import Data from "../data/episode.json";

export const Episodes = () => {
  return (
    <>
      <h1>Эпизоды</h1>
      {Data.map((item) => {
        return (
          <ListItem path={`/episodes/${item.id}`} card={item} key={item.id} />
        );
      })}
    </>
  );
};
