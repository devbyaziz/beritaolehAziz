import { useState } from 'react';
import { Paper, InputBase, IconButton, Box, Container } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query);
    }
  };

  const handleClear = () => {
    setQuery('');
  };

  return (
    <Container maxWidth="xl" className="py-6">
      <Paper
        component="form"
        onSubmit={handleSubmit}
        elevation={0}
        sx={{
          p: { xs: '8px 12px', md: '12px 16px' },
          display: 'flex',
          alignItems: 'center',
          borderRadius: 3,
          background: 'white',
          border: '2px solid',
          borderColor: 'grey.200',
          transition: 'all 0.3s ease',
          '&:hover': {
            borderColor: 'primary.main',
            boxShadow: '0 4px 20px rgba(102, 126, 234, 0.15)',
          },
          '&:focus-within': {
            borderColor: 'primary.main',
            boxShadow: '0 4px 20px rgba(102, 126, 234, 0.25)',
          },
        }}
      >
        <SearchIcon sx={{ color: 'grey.500', fontSize: { xs: 24, md: 28 }, ml: 1 }} />
        <InputBase
          sx={{
            ml: 2,
            flex: 1,
            fontSize: { xs: '0.95rem', md: '1.05rem' },
            '& input::placeholder': {
              opacity: 0.7,
            },
          }}
          placeholder="Cari berita terkini..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          inputProps={{ 'aria-label': 'cari berita' }}
        />
        {query && (
          <IconButton
            onClick={handleClear}
            size="small"
            sx={{
              mr: 1,
              color: 'grey.500',
              '&:hover': { color: 'grey.700' },
            }}
          >
            <ClearIcon fontSize="small" />
          </IconButton>
        )}
        <IconButton
          type="submit"
          sx={{
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            color: 'white',
            px: { xs: 2, md: 3 },
            borderRadius: 2,
            '&:hover': {
              background: 'linear-gradient(135deg, #5568d3 0%, #63408b 100%)',
              transform: 'scale(1.02)',
            },
            transition: 'all 0.2s ease',
          }}
        >
          <SearchIcon sx={{ fontSize: { xs: 20, md: 22 } }} />
        </IconButton>
      </Paper>
    </Container>
  );
};

export default SearchBar;
