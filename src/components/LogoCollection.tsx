'use client';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { useColorScheme } from '@mui/material/styles';

const darkModeLogos = [
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/6560628e8573c43893fe0ace_Sydney-white.svg',
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f4d520d0517ae8e8ddf13_Bern-white.svg',
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f46794c159024c1af6d44_Montreal-white.svg'
  
];

const lightModeLogos = [
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/6560628889c3bdf1129952dc_Sydney-black.svg',
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f4d4d8b829a89976a419c_Bern-black.svg',
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f467502f091ccb929529d_Montreal-black.svg'
  
];

const logoStyle = {
  width: 72,
  height: 56,
  margin: '0 16px',
  opacity: 0.7,
};

export default function LogoCollection() {
  const { mode, systemMode } = useColorScheme();
  let logos;
  if (mode === 'system') {
    if (systemMode === 'light') {
      logos = lightModeLogos;
    } else {
      logos = darkModeLogos;
    }
  } else if (mode === 'light') {
    logos = lightModeLogos;
  } else {
    logos = darkModeLogos;
  }

  return (
    <Box
      id="logoCollection"
      sx={{
        py: { xs: 1.5, sm: 2 },
      }}
    >
      <Typography
        component="p"
        variant="subtitle2"
        sx={{ color: 'text.secondary', textAlign: 'left', mb: 1 }}
      >
        Trusted by the best
      </Typography>
      <Grid
        container
        wrap="wrap"
        sx={{
          justifyContent: { xs: 'flex-start', sm: 'flex-start' },
          mt: 0.5,
          opacity: 0.6,
          rowGap: 1.5,
        }}
      >
        {logos.map((logo, index) => (
          <Box key={index} sx={{ display: 'flex', alignItems: 'center' }}>
            <img
              src={logo}
              alt={`Fake company number ${index + 1}`}
              style={logoStyle}
            />
          </Box>
        ))}
      </Grid>
    </Box>
  );
}
