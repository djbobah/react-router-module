import { useNavigate, useParams } from "react-router-dom";

import { EpisodeCardType } from "../types";
import { useEffect, useState } from "react";
import { useData } from "../context/DataProvider";
import { Button, Card, Divider, Grid, Text, Title } from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";

export const EpisodeCardDetail = () => {
  const { episodes } = useData();
  const [card, setCard] = useState<EpisodeCardType>();
  const navigate = useNavigate();
  const params = useParams();

  const handleClick = () => {
    navigate(-1);
  };

  useEffect(() => {
    episodes &&
      setCard(episodes.filter((card) => card.id === Number(params.id))[0]);
  }, []);
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

          <Title order={3} mt="lg">
            {card.name}
          </Title>
          <Divider my="md" />
          <Grid justify="center" mt="md" mb="xs">
            <Grid.Col span={4}>
              <Text>"Эпизод":</Text>
            </Grid.Col>
            <Grid.Col span={1}></Grid.Col>
            <Grid.Col span={6}>
              <Text> {card.episode}</Text>
            </Grid.Col>
          </Grid>
          <Grid justify="center" mt="md" mb="xs">
            <Grid.Col span={4}>
              <Text> Дата выхода в эфир:</Text>
            </Grid.Col>
            <Grid.Col span={1}></Grid.Col>
            <Grid.Col span={6}>
              <Text> {card.air_date}</Text>
            </Grid.Col>
          </Grid>
        </Card>
      )}
    </>
  );
};
