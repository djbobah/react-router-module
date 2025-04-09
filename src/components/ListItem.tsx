import { Link } from "react-router-dom";
import { LocalDate } from "../utils";
import { ListItemProps } from "../types";

export const ListItem = (props: ListItemProps) => {
  const { path, card } = props;
  return (
    <Link to={path} className="list-item">
      <span>{card.name}</span>
      <span>{LocalDate(card.created)}</span>
    </Link>
  );
};
