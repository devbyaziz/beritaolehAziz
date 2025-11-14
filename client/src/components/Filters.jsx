import { Paper, Box, Typography, Chip, Stack, Divider } from '@mui/material';
import PublicIcon from '@mui/icons-material/Public';
import BusinessIcon from '@mui/icons-material/Business';
import ComputerIcon from '@mui/icons-material/Computer';
import TheaterComedyIcon from '@mui/icons-material/TheaterComedy';
import SportsIcon from '@mui/icons-material/Sports';
import ScienceIcon from '@mui/icons-material/Science';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import NewspaperIcon from '@mui/icons-material/Newspaper';

const countries = [
  { code: 'us', name: 'Amerika', flag: '🇺🇸' },
  { code: 'gb', name: 'Inggris', flag: '🇬🇧' },
  { code: 'au', name: 'Australia', flag: '🇦🇺' },
  { code: 'ca', name: 'Kanada', flag: '🇨🇦' },
  { code: 'in', name: 'India', flag: '🇮🇳' },
  { code: 'id', name: 'Indonesia', flag: '🇮🇩' },
  { code: 'my', name: 'Malaysia', flag: '🇲🇾' },
  { code: 'sg', name: 'Singapura', flag: '🇸🇬' },
  { code: 'jp', name: 'Jepang', flag: '🇯🇵' },
];

const categories = [
  { id: 'general', name: 'Umum', icon: <NewspaperIcon fontSize="small" />, color: '#3b82f6' },
  { id: 'business', name: 'Bisnis', icon: <BusinessIcon fontSize="small" />, color: '#10b981' },
  { id: 'technology', name: 'Teknologi', icon: <ComputerIcon fontSize="small" />, color: '#8b5cf6' },
  { id: 'entertainment', name: 'Hiburan', icon: <TheaterComedyIcon fontSize="small" />, color: '#f59e0b' },
  { id: 'sports', name: 'Olahraga', icon: <SportsIcon fontSize="small" />, color: '#ef4444' },
  { id: 'science', name: 'Sains', icon: <ScienceIcon fontSize="small" />, color: '#06b6d4' },
  { id: 'health', name: 'Kesehatan', icon: <HealthAndSafetyIcon fontSize="small" />, color: '#ec4899' },
];

const Filters = ({ country, category, onCountryChange, onCategoryChange }) => {
  return (
    <Paper
      elevation={0}
      sx={{
        p: { xs: 2.5, md: 3 },
        borderRadius: 3,
        border: '1px solid',
        borderColor: 'grey.200',
        background: 'white',
      }}
    >
      <Stack spacing={3}>
        {/* Category Section */}
        <Box>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, gap: 1 }}>
            <NewspaperIcon sx={{ color: 'primary.main', fontSize: 24 }} />
            <Typography
              variant="h6"
              sx={{
                fontWeight: 700,
                fontSize: { xs: '1rem', md: '1.1rem' },
              }}
            >
              Kategori
            </Typography>
          </Box>
          <Stack spacing={1}>
            {categories.map((cat) => (
              <Box
                key={cat.id}
                onClick={() => onCategoryChange(cat.id)}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1.5,
                  p: 1.5,
                  borderRadius: 2,
                  cursor: 'pointer',
                  border: '1px solid',
                  borderColor: category === cat.id ? cat.color : 'grey.200',
                  background: category === cat.id
                    ? `linear-gradient(135deg, ${cat.color}15, ${cat.color}25)`
                    : 'white',
                  transition: 'all 0.2s ease',
                  '&:hover': {
                    borderColor: cat.color,
                    background: `linear-gradient(135deg, ${cat.color}10, ${cat.color}20)`,
                    transform: 'translateX(4px)',
                  },
                }}
              >
                <Box
                  sx={{
                    color: category === cat.id ? cat.color : 'grey.600',
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  {cat.icon}
                </Box>
                <Typography
                  sx={{
                    fontSize: '0.9rem',
                    fontWeight: category === cat.id ? 700 : 500,
                    color: category === cat.id ? cat.color : 'text.primary',
                  }}
                >
                  {cat.name}
                </Typography>
              </Box>
            ))}
          </Stack>
        </Box>

        <Divider />

        {/* Country Section */}
        <Box>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, gap: 1 }}>
            <PublicIcon sx={{ color: 'primary.main', fontSize: 24 }} />
            <Typography
              variant="h6"
              sx={{
                fontWeight: 700,
                fontSize: { xs: '1rem', md: '1.1rem' },
              }}
            >
              Negara
            </Typography>
          </Box>
          <Stack spacing={1}>
            {countries.map((c) => (
              <Box
                key={c.code}
                onClick={() => onCountryChange(c.code)}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1.5,
                  p: 1.5,
                  borderRadius: 2,
                  cursor: 'pointer',
                  border: '1px solid',
                  borderColor: country === c.code ? 'primary.main' : 'grey.200',
                  background: country === c.code
                    ? 'linear-gradient(135deg, #667eea15, #764ba225)'
                    : 'white',
                  transition: 'all 0.2s ease',
                  '&:hover': {
                    borderColor: 'primary.main',
                    background: 'linear-gradient(135deg, #667eea10, #764ba220)',
                    transform: 'translateX(4px)',
                  },
                }}
              >
                <Typography sx={{ fontSize: '1.2rem' }}>{c.flag}</Typography>
                <Typography
                  sx={{
                    fontSize: '0.9rem',
                    fontWeight: country === c.code ? 700 : 500,
                    color: country === c.code ? 'primary.main' : 'text.primary',
                  }}
                >
                  {c.name}
                </Typography>
              </Box>
            ))}
          </Stack>
        </Box>
      </Stack>
    </Paper>
  );
};

export default Filters;
