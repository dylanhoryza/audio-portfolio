import { Box, Typography } from '@mui/material';
import YouTubeVideo from '../components/YoutubeVideo';
import {useMediaQuery} from '@mui/material';
import { useTheme } from '@mui/material';

export default function Videos() {
  const theme = useTheme();
  const matchesSmallscreen = useMediaQuery(theme.breakpoints.down('lg'));
  return (
    <Box
      sx={{
        flexGrow: 1,
        padding: 4,
        backgroundColor: 'black',
        height: matchesSmallscreen ? '100dvh' : 'auto',
      }}
    >
      <Typography
        variant='h4'
        gutterBottom
        align='center'
        color='white'
        fontWeight={'bold'}
        sx={{ marginTop: 8, marginBottom: 3 }}
      >
        FILMS
      </Typography>
      <Box sx={{}}>
        <YouTubeVideo videoId='a0B3orVqvxQ' />
        <YouTubeVideo videoId='eKHCapsfADs' />
      </Box>
    </Box>
  );
}