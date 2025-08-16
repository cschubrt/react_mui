import * as React from 'react';
import App from './App';
import theme from './theme';
import Box from '@mui/material/Box';
import { createRoot } from 'react-dom/client';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

//StrictMode for dev
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh', width: '100%' }}>
        <App />
      </Box>
    </ThemeProvider>
  </React.StrictMode>
);