import { useNavigate, useParams } from "react-router-dom";
import { LocationCardType } from "../../shared/types";
import { useEffect, useState } from "react";
import { Button, Card, Divider, Grid, Text, Title } from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";
import { useData } from "../../shared/context/DataProvider";

export const LocationCardDetail = () => {
  const { locations } = useData();
  const [card, setCard] = useState<LocationCardType>();

  const navigate = useNavigate();
  const params = useParams();

  const handleClick = () => {
    navigate(-1);
  };

  useEffect(() => {
    locations &&
      setCard(locations.filter((card) => card.id === Number(params.id))[0]);
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
              <Text>Тип:</Text>
            </Grid.Col>
            <Grid.Col span={1}></Grid.Col>
            <Grid.Col span={6}>
              <Text>{card.type}</Text>
            </Grid.Col>
          </Grid>
          <Grid justify="center" mt="md" mb="xs">
            <Grid.Col span={4}>
              <Text>Измерение:</Text>
            </Grid.Col>
            <Grid.Col span={1}></Grid.Col>
            <Grid.Col span={6}>
              <Text> {card.dimension}</Text>
            </Grid.Col>
          </Grid>
        </Card>
      )}
    </>
  );
};
