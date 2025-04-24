import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { CharactersCardType } from "../../shared/types";
import { Button, Card, Divider, Grid, Image, Text, Title } from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";
import { useData } from "../../shared/context/DataProvider";

export const CharacterCardDetail = () => {
  const { characters } = useData();
  const [card, setCard] = useState<CharactersCardType>();
  const navigate = useNavigate();
  const params = useParams();

  const handleClick = () => {
    navigate(-1);
  };

  useEffect(() => {
    characters &&
      setCard(characters.filter((card) => card.id === Number(params.id))[0]);
  }, [card]);

  return (
    <>
      {card && (
        <Card shadow="sm" padding="sm" radius="md" mt={30} withBorder>
          <Button
            color="blue"
            fullWidth
            mt={10}
            radius="md"
            onClick={handleClick}
            leftSection={<IconArrowLeft size={14} />}
          >
            Назад
          </Button>

          <Divider my="md" />
          <Card.Section>
            <Image src={card.image} alt={card.name} />
          </Card.Section>
          <Title order={3} mt="lg">
            {card.name}
          </Title>
          <Grid justify="center" mt="md" mb="xs">
            <Grid.Col span={4}>
              <Text>Пол:</Text>
            </Grid.Col>
            <Grid.Col span={1}></Grid.Col>
            <Grid.Col span={6}>
              <Text>{card.gender}</Text>
            </Grid.Col>
          </Grid>
          <Grid justify="center" mt="md" mb="xs">
            <Grid.Col span={4}>
              <Text>Вид:</Text>
            </Grid.Col>
            <Grid.Col span={1}></Grid.Col>
            <Grid.Col span={6}>
              <Text> {card.species}</Text>
            </Grid.Col>
          </Grid>
          <Grid justify="center" mt="md" mb="xs">
            <Grid.Col span={4}>
              <Text>Статус:</Text>
            </Grid.Col>
            <Grid.Col span={1}></Grid.Col>
            <Grid.Col span={6}>
              <Text> {card.status}</Text>
            </Grid.Col>
          </Grid>
        </Card>
      )}
    </>
  );
};
