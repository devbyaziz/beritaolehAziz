import { Grid, Box, Typography, Button, CircularProgress } from '@mui/material';
import RefreshIcon from '@mui/icons-material/Refresh';
import NewsCard from './NewsCard';

const NewsList = ({ news, loading, totalResults, currentPage, onLoadMore }) => {
  const hasMore = news.length < totalResults;
  const displayedResults = Math.min(currentPage * 12, totalResults);

  if (!news || news.length === 0) {
    return (
      <Box
        sx={{
          textAlign: 'center',
          py: 12,
        }}
      >
        <Typography
          variant="h6"
          color="text.secondary"
          sx={{
            fontSize: { xs: '1rem', md: '1.25rem' },
          }}
        >
          {loading ? 'Memuat berita...' : 'Tidak ada berita yang ditemukan'}
        </Typography>
      </Box>
    );
  }

  return (
    <Box>
      {/* News Info */}
      {totalResults > 0 && (
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            mb: 3,
            fontWeight: 500,
            fontSize: { xs: '0.875rem', md: '0.95rem' },
          }}
        >
          Menampilkan {displayedResults} dari {totalResults} hasil
        </Typography>
      )}

      {/* News Grid */}
      <Grid container spacing={{ xs: 2, md: 3 }} sx={{ mb: 6 }}>
        {news.map((article, index) => (
          <Grid item xs={12} md={6} xl={4} key={`${article.url}-${index}`}>
            <NewsCard article={article} />
          </Grid>
        ))}
      </Grid>

      {/* Load More Button */}
      {hasMore && (
        <Box sx={{ textAlign: 'center' }}>
          <Button
            variant="contained"
            size="large"
            startIcon={loading ? <CircularProgress size={20} color="inherit" /> : <RefreshIcon />}
            onClick={onLoadMore}
            disabled={loading}
            sx={{
              px: { xs: 4, md: 6 },
              py: { xs: 1.5, md: 2 },
              borderRadius: 3,
              fontSize: { xs: '0.9rem', md: '1rem' },
              fontWeight: 600,
              textTransform: 'none',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              boxShadow: '0 4px 15px rgba(102, 126, 234, 0.4)',
              transition: 'all 0.3s ease',
              '&:hover': {
                background: 'linear-gradient(135deg, #5568d3 0%, #63408b 100%)',
                transform: 'translateY(-2px)',
                boxShadow: '0 6px 20px rgba(102, 126, 234, 0.5)',
              },
              '&:disabled': {
                background: 'linear-gradient(135deg, #667eea80 0%, #764ba280 100%)',
              },
            }}
          >
            {loading ? 'Memuat...' : 'Muat Lebih Banyak'}
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default NewsList;
