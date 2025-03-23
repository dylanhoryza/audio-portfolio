import { Spotify } from 'react-spotify-embed';
import { Box, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';

export default function Music() {
  return (
    <Box sx={{ flexGrow: 1, padding: 4, backgroundColor: 'black' }}>
       <Typography
        variant='h4'
        gutterBottom
        align='center'
        color='white'
        sx={{ marginTop: 8, marginBottom: 3, fontWeight: 'bold' }}
      >
        MUSIC
      </Typography>
      <Grid container spacing={4} sx={{ mt: 4 }}>
        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
          <Box sx={{ display: 'flex', justifyContent: 'center'}}>
        <Spotify link='https://open.spotify.com/track/58rYxk0PpUb9P0yumKXzPO?si=da9b9992cd5e4f86' />
        </Box>
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
          <Box sx={{ display: 'flex', justifyContent: 'center'}}>
        <Spotify link='https://open.spotify.com/track/6gsnCnwpiuwqn2YshKzFCA?si=0a846edb66354ecc' />
        </Box>
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
          <Box sx={{ display: 'flex', justifyContent: 'center'}}>
        <Spotify link='https://open.spotify.com/track/3A097HZdUdr6ublqIDAXTp?si=2267e553177c47bc' />
        </Box>
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
          <Box sx={{ display: 'flex', justifyContent: 'center'}}>
        <Spotify link='https://open.spotify.com/track/7FAfRhUukEmjEEhaZaamXO?si=c8a3b2ac650e4d7c' />
        </Box>
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
          <Box sx={{ display: 'flex', justifyContent: 'center'}}>
        <Spotify link='https://open.spotify.com/track/2u1J6xS4OcY3y10xRpQUeN?si=859c2544dfee4545' />
        </Box>
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
          <Box sx={{ display: 'flex', justifyContent: 'center'}}>
        <Spotify link='https://open.spotify.com/track/7dSrjVdxqSwzul8UPlVTD8?si=e0fb9000d89f44ae' />
        </Box>
        </Grid>
       

      </Grid>
      
    </Box>
  );
}
