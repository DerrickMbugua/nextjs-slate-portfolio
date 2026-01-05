'use client';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import LogoCollection from './LogoCollection';

const StyledBox = styled('div')(({ theme }) => ({
  width: '100%',
  maxWidth: 520,
  height: 260,
  borderRadius: (theme.vars || theme).shape.borderRadius,
  border: '1px solid',
  borderColor: (theme.vars || theme).palette.grey[200],
  boxShadow: '0 18px 45px rgba(15, 23, 42, 0.28)',
  backgroundImage:
    'url(https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800)',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  [theme.breakpoints.up('sm')]: {
    height: 300,
  },
  [theme.breakpoints.up('md')]: {
    height: 340,
  },
  ...theme.applyStyles('dark', {
    boxShadow: '0 18px 60px rgba(0, 0, 0, 0.8)',
  }),
}));

export default function Hero() {
  return (
    <Box
      id="hero"
      sx={(theme) => ({
        width: '100%',
        backgroundRepeat: 'no-repeat',

        backgroundImage:
          'radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 100%, 90%), transparent)',
        ...theme.applyStyles('dark', {
          backgroundImage:
            'radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 100%, 16%), transparent)',
        }),
      })}
    >
      <Container
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: { xs: 3, sm: 5, md: 8 },
          px: { xs: 2, sm: 3 },
          pt: { xs: 8, sm: 14, md: 18 },
          pb: { xs: 5, sm: 9, md: 11 },
        }}
      >
        <Box
          sx={{
            flex: 1,
            maxWidth: { xs: '100%', md: '520px' },
            width: '100%',
          }}
        >
          <Stack spacing={3} useFlexGap sx={{ alignItems: 'flex-start' }}>
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: '1.8rem', sm: '2.3rem', md: '3.1rem' },
                lineHeight: 1.1,
                textAlign: { xs: 'left', sm: 'left' },
              }}
            >
              Crafting Modern&nbsp;
              <Typography
                component="span"
                variant="h1"
                sx={(theme) => ({
                  fontSize: 'inherit',
                  color: 'primary.main',
                  ...theme.applyStyles('dark', {
                    color: 'primary.light',
                  }),
                })}
              >
              Software Solutions
              </Typography>
            </Typography>
            <Typography
              sx={{
                textAlign: 'left',
                color: 'text.secondary',
                fontSize: { xs: '0.95rem', sm: '1rem' },
              }}
            >
              We&apos;re a software studio focused on building fast, accessible, and
              visually polished web applications. From websites to complex applications
              and chatbots, we help businesses turn ideas into reliable, production-ready
              products.
            </Typography>
            <Box sx={{ mt: { xs: 2, sm: 3 }, width: '100%' }}>
              <LogoCollection />
            </Box>
          </Stack>
        </Box>
        <Box
          sx={{
            flex: 1,
            display: 'flex',
            justifyContent: { xs: 'center', md: 'flex-end' },
            mt: { xs: 4, md: 0 },
            width: '100%',
          }}
        >
          <StyledBox id="image" />
        </Box>
      </Container>
    </Box>
  );
}
