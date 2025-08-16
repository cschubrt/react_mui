import * as React from 'react';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

export default function Copyright() {
  return (
    <Typography
      variant="div"
      align="center"
      sx={{
        color: 'text.secondary',
      }}
    >
      {'Copyright © '}
      <Link color="inherit" href="https://cschubertmt.com/">
        cschubertmt
      </Link>{' '}
      {new Date().getFullYear()}.
    </Typography>
  );
}