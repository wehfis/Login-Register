import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Image from 'next/image';

const LOGO_PATH = '/logo.png';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Grid
      container
      sx={{
        height: '100vh',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Grid
        sx={{
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          p: { xs: 2, sm: 4, md: 6 },
          zIndex: 2,
          maxWidth: '500px',
          display: 'none',
          '@media (min-width:1000px)': {
            display: 'flex',
          },
        }}
      >
        <Box sx={{ mb: 4 }}>
          <Image src={LOGO_PATH} alt="Treedis Logo" width={35} height={50} />
        </Box>
        <Typography
          variant="h3"
          sx={{
            fontWeight: 'medium',
            fontSize: '62px',
            mb: 1,
            color: 'text.primary',
          }}
        >
          Take{' '}
          <Box
            component="span"
            sx={{
              backgroundColor: 'primary.main',
              color: 'primary.contrastText',
              px: 0.5,
              py: 1.5,
              borderRadius: '10px',
              fontSize: '62px',
            }}
          >
            reality
          </Box>
          <br />
          to the next <br />
          level
        </Typography>
      </Grid>
      <Grid
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          p: { xs: 3, sm: 4, md: 8 },
          backgroundColor: 'background.paper',
        }}
      >
        <Box sx={{ width: '100%', maxWidth: 450 }}>{children}</Box>
      </Grid>
    </Grid>
  );
}
