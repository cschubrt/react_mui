import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button'; // For desktop links
import { NavLink } from 'react-router-dom';

function Navbar() {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const navLinks = [
    { route: '/', name: 'Home' },
    { route: '/sign-up', name: 'Sign-Up' },
    { route: '/contact', name: 'Contact' }
  ];

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{ flexGrow: 1, display: { md: 'flex' } }}
        >
          <Box
          component="img"
          src='../src/assets/logo2.png'
          sx={{ height: 50, width: 70 }}
        />
        </Typography>

        {/* Hamburger menu for small screens */}
        <Box sx={{ flexGrow: 1, justifyContent: 'end', display: { xs: 'flex', md: 'none' } }}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: 'flex', md: 'none' },
            }}
          >
            {navLinks.map((link) => (
              <MenuItem
                key={link.name}
                onClick={handleCloseNavMenu}
                component={NavLink}
                to={link.route}>
                <Typography textAlign="center">{link.name}</Typography>
              </MenuItem>
            ))}
          </Menu>

        </Box>

        {/* Desktop navigation links */}
        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
          {navLinks.map((link) => (
            <>
              <Button
                key={link.name}
                sx={{ my: 2, color: 'white', display: 'block' }}
                component={NavLink}
                to={link.route}
              >
                {link.name}
              </Button>
            </>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;