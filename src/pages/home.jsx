import * as React from 'react';
import Box from '@mui/material/Box';
import MuiCard from '@mui/material/Card';
import { styled } from '@mui/material/styles';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';

const Card = styled(MuiCard)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignSelf: 'center',
  width: '100%',
  padding: theme.spacing(4),
  gap: theme.spacing(2),
  margin: 4,
  boxShadow:
    'hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px',
  [theme.breakpoints.up('md')]: {
    width: '500px',
  },
}));

export default function Home() {
  return (
    <>
      <Box sx={{
        maxWidth: '100%',
        display: 'flex',
        marginBottom: 1,
        marginTop: 5,
        flexDirection: { xs: 'column', md: 'row' },
      }}>
        <Card sx={{ height: '100%' }}>
          <h4 style={{ margin: 0 }}>Modules Installed</h4>
          <List sx={{ paddingRight: '50%', textAlign: 'center' }} aria-label="Modules">
            <ListItemText primary="Material UI" />
            <Divider variant="middle" />
            <ListItemText primary="React Router" />
            <Divider variant="middle" />
            <ListItemText primary="Motion" />
          </List>
        </Card>
        <Card sx={{ height: '100%' }} >
          <h4 style={{ margin: 0 }}>Material UI</h4>
          MUI offers a comprehensive suite of free UI tools to help you ship new features faster. Start with Material UI, our fully-loaded component library, or bring your own design system to our production-ready components.
        </Card>
      </Box>

      <Box sx={{
        maxWidth: '100%',
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
      }}>
        <Card sx={{ height: '100%' }} >
          <h4 style={{ margin: 0 }}>React Router</h4>
          A user-obsessed, standards-focused, multi-strategy router you can deploy anywhere.
        </Card>
        <Card sx={{ height: '100%' }}>
          <h4 style={{ margin: 0 }}>Motion</h4>
          Motion. A production-grade animation library for React, JavaScript, and Vue.
        </Card>
      </Box>
    </>
  );
}