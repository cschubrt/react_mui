import * as React from 'react';
import Container from '@mui/material/Container';
import pic from '../assets/p2.jpg';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import Typography from '@mui/material/Typography';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import { NavLink } from 'react-router-dom';
import '../assets/css/home.css'

export default function Home() {
  return (
    <Container className="imgContainer" maxWidth="100%">
      <Box
        component="img"
        sx={{
          width: '100%',
          maxWidth: '100%'
        }}
        alt="Computing Image"
        src={pic}
      />
      <Box className="bottom-right">
        <Box sx={{ color: '#f0f5f1', width: '100%', borderRadius: '16px', backgroundColor: 'rgba(92, 113, 94, .3)' }}>
          <nav aria-label="secondary mailbox folders">
            <List>
              <ListItem disablePadding>
                <ListItemButton component={NavLink} to="/">
                  <ListItemText primary={<Typography textAlign="right">
                    Home
                  </Typography>} />
                </ListItemButton>
              </ListItem>
              <Divider />
              <ListItem disablePadding>
                <ListItemButton component={NavLink} to="/sign-up">
                  <ListItemText primary={<Typography textAlign="right">
                    Login
                  </Typography>} />
                </ListItemButton>
              </ListItem>
              <Divider />
              <ListItem disablePadding>
                <ListItemButton component={NavLink} to="/contact">
                  <ListItemText primary={<Typography textAlign="right">
                    Contact
                  </Typography>} />
                </ListItemButton>
              </ListItem>
            </List>
          </nav>
        </Box>
      </Box>
    </Container>
  );
}