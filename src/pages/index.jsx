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
import Fade from '@mui/material/Fade';
import { NavLink } from 'react-router-dom';
import '../assets/css/home.css'

export default function Home() {
  return (
    <Container className="popup" maxWidth="100%">
      <Box className="popup-inner">
        <Box className="imgContainer" maxWidth="100%">
          <Box
            component="img"
            className="faded"
            sx={{
              width: '100%',
              maxWidth: '100%',
              borderRadius: '5px',
              maxHeight: '100%',
              height: '100%',
              minHeight: '159px',
            }}
            alt="Computing Image"
            src={pic}
          />
          <Box className="bottom-right">
            <Box sx={{ color: '#f0f5f1', width: '100%', borderRadius: '5px', backgroundColor: 'rgba(92, 113, 94, .3)' }}>
              <nav aria-label="Navigation area">
                <List>
                  <ListItem disablePadding>
                    <ListItemButton component={NavLink} to="/home">
                      <ListItemText primary={<Typography textAlign="right">
                        Home
                      </Typography>} />
                    </ListItemButton>
                  </ListItem>
                  <Divider />
                  <ListItem disablePadding>
                    <ListItemButton component={NavLink} to="/Login">
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
          <Fade in={true} easing={{ enter: 'cubic-bezier(0.0, 0, 0.2, 0)' }}>
          <Box className="top-left">
            This is React
          </Box>
          </Fade>
        </Box>
      </Box>
    </Container>
  );
}