import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box, Divider } from '@mui/material';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Typography variant="h6" component="div">
          My App
        </Typography>
        <Box sx={{ display: 'flex' }}>
          <Button color="inherit" component={NavLink} to="/" end>
            Home
          </Button>
          <Divider aria-hidden="true" orientation="vertical" variant="middle" flexItem />
          <Button color="inherit" component={NavLink} to="/sign-up">
            Sign Up
          </Button>
          <Divider aria-hidden="true" orientation="vertical" variant="middle" flexItem />
          <Button color="inherit" component={NavLink} to="/contact">
            Contact
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;