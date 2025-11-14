import React, { useState, useEffect } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Container, Box, Grid } from '@mui/material';
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import Filters from './components/Filters';
import NewsList from './components/NewsList';
import LoadingSpinner from './components/LoadingSpinner';
import ErrorAlert from './components/ErrorAlert';
import Footer from './components/Footer';
import { getNewsByCategory, searchNews } from './services/newsApi';

const theme = createTheme({
  palette: {
    primary: {
      main: '#667eea',
    },
    secondary: {
      main: '#764ba2',
    },
    background: {
      default: '#f9fafb',
    },
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
    ].join(','),
  },
});

function App() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [filters, setFilters] = useState({
    country: 'us',
    category: 'general',
    search: '',
  });

  useEffect(() => {
    loadNews();
  }, [filters.country, filters.category]);

  const loadNews = async (page = 1, append = false) => {
    setLoading(true);
    setError(null);

    try {
      let response;

      if (filters.search) {
        response = await searchNews({
          q: filters.search,
          max: 12,
        });
      } else {
        response = await getNewsByCategory(filters.category, {
          country: filters.country,
          max: 12,
        });
      }

      if (response.success && response.data.articles) {
        if (append) {
          setNews(prev => [...prev, ...response.data.articles]);
        } else {
          setNews(response.data.articles);
        }
        setTotalResults(response.data.totalResults);
        setCurrentPage(page);
      }
    } catch (err) {
      setError(err.message || 'Gagal memuat berita');
      if (!append) {
        setNews([]);
      }
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (query) => {
    setFilters(prev => ({ ...prev, search: query }));
    setCurrentPage(1);
    loadNews(1, false);
  };

  const handleFilterChange = (filterType, value) => {
    setFilters(prev => ({ ...prev, [filterType]: value, search: '' }));
    setCurrentPage(1);
  };

  const handleLoadMore = () => {
    loadNews(currentPage + 1, true);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
        <Navbar />

        {/* Spacer for fixed navbar */}
        <Box sx={{ height: { xs: 64, md: 80 } }} />

        <SearchBar onSearch={handleSearch} />

        {/* Layout dengan Sidebar */}
        <Container maxWidth="xl" sx={{ pb: 8 }}>
          <Grid container spacing={3}>
            {/* Sidebar Filter - Kiri */}
            <Grid item xs={12} lg={2.5}>
              <Box
                sx={{
                  position: { lg: 'sticky' },
                  top: { xs: 0, lg: 100 },
                  maxHeight: { lg: 'calc(100vh - 120px)' },
                  overflowY: { lg: 'auto' },
                  '&::-webkit-scrollbar': {
                    width: '6px',
                  },
                  '&::-webkit-scrollbar-track': {
                    background: 'transparent',
                  },
                  '&::-webkit-scrollbar-thumb': {
                    background: '#667eea',
                    borderRadius: '10px',
                  },
                  '&::-webkit-scrollbar-thumb:hover': {
                    background: '#764ba2',
                  },
                }}
              >
                <Filters
                  country={filters.country}
                  category={filters.category}
                  onCountryChange={(value) => handleFilterChange('country', value)}
                  onCategoryChange={(value) => handleFilterChange('category', value)}
                />
              </Box>
            </Grid>

            {/* Content Area - Kanan */}
            <Grid item xs={12} lg={9.5}>
              {loading && currentPage === 1 && <LoadingSpinner />}

              {error && <ErrorAlert message={error} onClose={() => setError(null)} />}

              <NewsList
                news={news}
                loading={loading}
                totalResults={totalResults}
                currentPage={currentPage}
                onLoadMore={handleLoadMore}
              />
            </Grid>
          </Grid>
        </Container>

        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;
