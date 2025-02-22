import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';

import { AppRoutes } from './routes';
import { LightTheme } from './shareds/themes';

export const App = () => {

  return (
    <ThemeProvider theme={LightTheme}>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </ThemeProvider>
  );

}

