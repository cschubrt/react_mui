import Box from '@mui/material/Box';
import MuiCard from '@mui/material/Card';
import { styled } from '@mui/material/styles';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';

const Card = styled(MuiCard)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignSelf: 'center',
  width: '100%',
  padding: theme.spacing(4),
  gap: theme.spacing(1),
  margin: 1,
  backgroundColor: 'transparent',
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
        gap: 1,
        maxWidth: '100%',
        display: 'flex',
        marginBottom: 1,
        marginTop: 5,
        flexDirection: { xs: 'column', md: 'row' },
      }}>
        <Card sx={{ height: '100%' }}>
          <Typography variant='h6'>Modules Installed</Typography>
          <List sx={{ paddingRight: '50%', textAlign: 'center' }} aria-label="Modules">
            <ListItem sx={{ paddingTop: 0, paddingBottom: 0 }}><ListItemText primary="Material UI" /></ListItem>
            <Divider variant="middle" />
            <ListItem sx={{ paddingTop: 0, paddingBottom: 0 }}><ListItemText primary="React Router" /></ListItem>
            <Divider variant="middle" />
            <ListItem sx={{ paddingTop: 0, paddingBottom: 0 }}><ListItemText primary="Motion" /></ListItem>
          </List>
        </Card>
        <Card sx={{ height: '100%' }} >
          <Typography variant='h6'>Material UI</Typography>
          MUI offers a comprehensive suite of free UI tools to help devs ship new features faster. Start with Material UI, fully-loaded component library, or bring your own design system to production-ready components.
        </Card>
      </Box>

      <Box sx={{
        gap: 1,
        maxWidth: '100%',
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
      }}>
        <Card sx={{ height: '100%' }} >
          <Typography variant='h6'>React Router</Typography>
          A user-obsessed, standards-focused, multi-strategy router you can deploy anywhere.
        </Card>
        <Card sx={{ height: '100%' }}>
          <Typography variant='h6'>Motion</Typography>
          Motion. A production-grade animation library for React, JavaScript, and Vue.
        </Card>
      </Box>
    </>
  );
}