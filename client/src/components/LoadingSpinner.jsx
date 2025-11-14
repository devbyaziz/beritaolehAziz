import React from 'react';
import { Box, CircularProgress, Typography } from '@mui/material';

const LoadingSpinner = () => {
  return (
    <Box className="flex flex-col items-center justify-center py-12">
      <CircularProgress size={60} thickness={4} />
      <Typography variant="body1" color="text.secondary" className="mt-4">
        Memuat berita...
      </Typography>
    </Box>
  );
};

export default LoadingSpinner;
