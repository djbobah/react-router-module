import { Link } from "react-router-dom";
import { LocalDate } from "../utils";
import { ListItemProps } from "../types";

export const ListItem = (props: ListItemProps) => {
  const { path, num, card, ref } = props;
  return (
    <Link ref={ref} to={path} className="list-item">
      {num}
      <span>{card.name}</span>
      <span>{LocalDate(card.created)}</span>
    </Link>
  );
};
