import { AppBar, Toolbar, Typography, Container, Grid, Box } from '@mui/material';

export default function BasicPageLayout() {
  return (
    <Box
      component="img"
      sx={{
        width: '99%',
        maxWidth: '100%',
        maxHeight: '80%'
      }}
      alt="Computing Image"
      src="../src/assets/p2.jpg"
    />
  );
} 