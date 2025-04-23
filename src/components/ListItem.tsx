import { Link } from "react-router-dom";
import { LocalDate } from "../utils";
import { ListItemProps } from "../types";
import { Avatar, Container, Group, TableOfContents, Text } from "@mantine/core";

export const ListItem = (props: ListItemProps) => {
  const { path, num, card, ref } = props;

  return (
    <Link ref={ref} to={path} className="list-link">
      <Container h={50} mt="md" w={600} className="list-item">
        {num}
        <span>{card.name}</span>
        <span>{LocalDate(card.created)}</span>
      </Container>
    </Link>
  );
};
