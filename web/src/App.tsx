import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';

import { BrowserRouter } from 'react-router-dom';
import theme from './styles/theme';
import Router from './Router';

function App() {
  return (
    <MantineProvider theme={theme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </MantineProvider>
  );
}

export default App;
