import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import SignIn from '../components/SignIn';
import Divider from '@mui/material/Divider';
import Content from '../components/Content';

export default function Login() {
  return (
    <Box>
      <Stack
        direction="column"
        component="main"
        sx={
          {
            justifyContent: 'center',
            height: 'calc((1 - var(--template-frame-height, 0)) * 100%)',
            marginTop: 'max(20px - var(--template-frame-height, 0px), 0px)',
            minHeight: '100%',
          }}
      >
        <Stack
          direction={{ xs: 'column-reverse', md: 'row' }}
          sx={{
            justifyContent: 'center',
            gap: 6,
            p: 2,
            mx: 'auto',
          }}
        >
          <Stack
            direction={{ xs: 'column-reverse', md: 'row' }}
            sx={{
              justifyContent: 'center',
              gap: 6,
              p: { xs: 2, sm: 4 },
              m: 'auto',
            }}
          >
            <Content />
            <Divider orientation="vertical" flexItem />
            <SignIn />
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
}