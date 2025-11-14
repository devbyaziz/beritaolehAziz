import { AppBar, Toolbar, Typography, Box, IconButton, Container } from '@mui/material';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        backdropFilter: 'blur(10px)',
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
    >
      <Container maxWidth="xl">
        <Toolbar sx={{ minHeight: { xs: 64, md: 80 } }}>
          <Box className="flex items-center gap-2 md:gap-3">
            <NewspaperIcon sx={{ fontSize: { xs: 32, md: 40 }, color: 'white' }} />
            <Box>
              <Typography
                variant="h5"
                component="div"
                sx={{
                  fontWeight: 800,
                  fontSize: { xs: '1.25rem', sm: '1.5rem', md: '1.75rem' },
                  letterSpacing: '-0.02em',
                }}
              >
                Berita Oleh Aziz
              </Typography>
              <Typography
                variant="caption"
                sx={{
                  display: { xs: 'none', sm: 'block' },
                  opacity: 0.9,
                  fontSize: '0.75rem',
                }}
              >
                Berita Terkini dari Seluruh Dunia
              </Typography>
            </Box>
          </Box>

          <Box sx={{ flexGrow: 1 }} />

          <IconButton
            sx={{
              display: { xs: 'flex', md: 'none' },
              color: 'white',
            }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
