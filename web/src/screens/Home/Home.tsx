import {
  Stack, Text,
  Title,
} from '@mantine/core';
import SearchBar from 'components/SearchBar';
import { PrimaryColor } from 'styles/colors';
import theme from 'styles/theme';
import usePlaces from 'hooks/aviasales/usePlaces';

function Home() {
  const { data } = usePlaces({ search: 'Краков' });

  return (
    <Stack align="center" bg={PrimaryColor.BACKGROUND}>
      <Stack align="center">
        <Title order={1} style={{ color: theme.white }}>
          Поиск дешёвых авиабилетов
        </Title>
        <Text fw={600} style={{ color: theme.white }}>
          16 лет помогаем вам экономить
        </Text>
      </Stack>
      <SearchBar />

      {data?.data.map((place) => (
        <div>
          {place.name}
        </div>
      ))}
    </Stack>
  );
}

export default Home;
