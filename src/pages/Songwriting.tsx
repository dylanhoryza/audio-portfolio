import { Box, Typography } from '@mui/material';
import YouTubeVideo from '../components/YoutubeVideo';

export default function Songwriting() {
  return (
    <Box
      sx={{
        flexGrow: 1,
        padding: 4,
        backgroundColor: 'black',
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
        Songwriting
      </Typography>
      <Box sx={{ backgroundColor: 'black', height: 'auto'}}>
        <YouTubeVideo videoId='Q6czlNRWzgQ' />
        <YouTubeVideo videoId='v2WhEjQWZpo' />
        <YouTubeVideo videoId='XEiMKsaJ9lE' />
        <YouTubeVideo videoId='L0ihRmWtImk' />
        <YouTubeVideo videoId='t8pLdOo7Hdg' />
      </Box>
    </Box>
  );
}
