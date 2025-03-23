import { Box, Typography } from '@mui/material';
import YouTubeVideo from '../components/YoutubeVideo';

export default function Videos() {
  return (
    <Box
      sx={{
        flexGrow: 1,
        padding: 4,
        backgroundColor: 'black',
        height: '100dvh',
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