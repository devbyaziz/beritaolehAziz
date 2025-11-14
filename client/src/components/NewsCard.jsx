import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  Chip,
  IconButton,
} from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const NewsCard = ({ article }) => {
  const {
    title,
    description,
    url,
    urlToImage,
    publishedAt,
    source,
  } = article;

  const imageUrl = urlToImage || 'https://via.placeholder.com/400x250?text=No+Image';
  const publishedDate = new Date(publishedAt).toLocaleDateString('id-ID', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const handleCardClick = () => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <Card
      onClick={handleCardClick}
      elevation={0}
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        cursor: 'pointer',
        borderRadius: 3,
        border: '1px solid',
        borderColor: 'grey.200',
        overflow: 'hidden',
        position: 'relative',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        '&:hover': {
          transform: 'translateY(-8px)',
          boxShadow: '0 20px 40px rgba(0,0,0,0.12)',
          borderColor: 'primary.main',
          '& .news-image': {
            transform: 'scale(1.05)',
          },
          '& .read-more-btn': {
            transform: 'translateX(4px)',
          },
        },
      }}
    >
      {/* Image */}
      <Box sx={{ position: 'relative', overflow: 'hidden', height: 200 }}>
        <CardMedia
          component="img"
          image={imageUrl}
          alt={title}
          className="news-image"
          sx={{
            height: 200,
            objectFit: 'cover',
            transition: 'transform 0.5s ease',
          }}
          onError={(e) => {
            e.target.src = 'https://via.placeholder.com/400x250?text=No+Image';
          }}
        />

        {/* Source Badge */}
        <Box
          sx={{
            position: 'absolute',
            top: 12,
            left: 12,
          }}
        >
          <Chip
            label={source?.name || 'Unknown'}
            size="small"
            sx={{
              background: 'rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(10px)',
              fontWeight: 600,
              fontSize: '0.75rem',
              border: '1px solid rgba(255, 255, 255, 0.3)',
            }}
          />
        </Box>
      </Box>

      {/* Content */}
      <CardContent
        sx={{
          flexGrow: 1,
          p: { xs: 2.5, md: 3 },
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {/* Title */}
        <Typography
          variant="h6"
          component="h2"
          sx={{
            fontWeight: 700,
            fontSize: { xs: '1rem', md: '1.1rem' },
            lineHeight: 1.4,
            mb: 1.5,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            color: 'text.primary',
          }}
        >
          {title || 'Tidak ada judul'}
        </Typography>

        {/* Description */}
        <Typography
          variant="body2"
          sx={{
            color: 'text.secondary',
            mb: 2,
            flexGrow: 1,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical',
            lineHeight: 1.6,
          }}
        >
          {description || 'Tidak ada deskripsi tersedia'}
        </Typography>

        {/* Footer */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            pt: 2,
            borderTop: '1px solid',
            borderColor: 'grey.100',
          }}
        >
          {/* Date */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
            <AccessTimeIcon sx={{ fontSize: 16, color: 'text.secondary' }} />
            <Typography variant="caption" sx={{ color: 'text.secondary' }}>
              {publishedDate}
            </Typography>
          </Box>

          {/* Arrow Button */}
          <IconButton
            size="small"
            className="read-more-btn"
            sx={{
              color: 'primary.main',
              transition: 'transform 0.2s ease',
            }}
            onClick={(e) => {
              e.stopPropagation();
              window.open(url, '_blank', 'noopener,noreferrer');
            }}
          >
            <ArrowForwardIcon fontSize="small" />
          </IconButton>
        </Box>
      </CardContent>
    </Card>
  );
};

export default NewsCard;
