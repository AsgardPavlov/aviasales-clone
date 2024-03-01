import {
  rem, SegmentedControl, Stack, Text,
} from '@mantine/core';
import {
  IconBedFilled,
  IconBellRinging2Filled,
  IconDeviceComputerCamera,
  IconPlaneTilt,
  IconUserFilled,
} from '@tabler/icons-react';
import theme from '../styles/theme.ts';

const items = [
  {
    value: 'plane-tickets',
    label: 'Авиабилеты',
    Icon: IconPlaneTilt,
  },
  {
    value: 'hotels',
    label: 'Отели',
    Icon: IconBedFilled,
  },
  {
    value: 'long-story-short',
    label: 'Короче',
    Icon: IconDeviceComputerCamera,
  },
  {
    value: 'subscriptions',
    label: 'Подписки',
    Icon: IconBellRinging2Filled,
  },
  {
    value: 'profile',
    label: 'Профиль',
    Icon: IconUserFilled,
  },
];

function SearchBar() {
  const formattedItems = items.map(({ value, Icon, label }) => (
    {
      value,
      label: (
        <Stack gap="xs" justify="center" align="center">
          <Icon style={{ width: rem(18), height: rem(18), fill: theme.black }} />
          <Text size="sm" fw="600">{label}</Text>
        </Stack>
      ),
    }
  ));

  return (
    <SegmentedControl data={formattedItems} maw={526} w="100%" />
  );
}

export default SearchBar;
