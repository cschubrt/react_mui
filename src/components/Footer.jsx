import { Typography, Box } from '@mui/material';

function Footer() {
  return (
    <Box component="footer" sx={{ p: 1, bgcolor: 'primary.main', color: 'white', width: '100%' }}>
      <Typography variant="body2" align="center">
        Footer Content
      </Typography>
    </Box>
  );
}

export default Footer;