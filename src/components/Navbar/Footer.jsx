import { Typography, Box } from '@mui/material';
import Copyright from '../../components/Copyright'

function Footer() {
  return (
    <Box component="footer" sx={{ p: 1, bgcolor: 'primary.main', color: 'white', width: '100%' }}>
      <Typography variant="body2" align="center">
        <Copyright />
      </Typography>
    </Box>
  );
}

export default Footer;