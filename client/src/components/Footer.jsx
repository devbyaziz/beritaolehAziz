import { Box, Container, Typography, Link, Stack } from '@mui/material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        py: { xs: 6, md: 8 },
        mt: 8,
      }}
    >
      <Container maxWidth="xl">
        <Stack spacing={2} alignItems="center">
          <Typography
            variant="body1"
            sx={{
              fontWeight: 500,
              fontSize: { xs: '0.9rem', md: '1rem' },
            }}
          >
            Dibuat dengan menggunakan React, Material UI & Tailwind CSS
          </Typography>

          <Typography
            variant="body2"
            sx={{
              opacity: 0.9,
              fontSize: { xs: '0.85rem', md: '0.9rem' },
            }}
          >
            Data berita dari{' '}
            <Link
              href="https://gnews.io"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: 'white',
                fontWeight: 600,
                textDecoration: 'underline',
                textUnderlineOffset: '3px',
                '&:hover': {
                  opacity: 0.8,
                },
              }}
            >
              GNews.io
            </Link>
          </Typography>

          <Typography
            variant="caption"
            sx={{
              opacity: 0.7,
              fontSize: { xs: '0.75rem', md: '0.8rem' },
              mt: 1,
            }}
          >
            © 2024 Berita Oleh Aziz. All rights reserved.
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
