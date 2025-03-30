import { Box, Typography } from '@mui/material';
import YouTubeVideo from '../components/YoutubeVideo';

export default function Redesigns() {
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
        REDESIGNS
      </Typography>
      <Box sx={{}}>
        <YouTubeVideo videoId='YoPo5M1vXqA' />
        <YouTubeVideo videoId='KH72QufgaHo' />
        <YouTubeVideo videoId='CW3JAaG2fsI' />
        <YouTubeVideo videoId='5SdwGPQD8AQ' />
      </Box>
    </Box>
  );
}
