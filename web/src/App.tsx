import { MantineProvider, Title } from '@mantine/core';
import theme from './styles/theme';
import '@mantine/core/styles.css';

function App() {
  return (
    <MantineProvider theme={theme}>
      <Title>
        Поиск дешёвых авиабилетов
      </Title>
    </MantineProvider>
  );
}

export default App;
