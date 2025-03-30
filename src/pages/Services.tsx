import { Box, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import PhotoCard from '../components/PhotoCard';
import ServicePhoto from '../assets/IMG_2466.jpg';
import {useMediaQuery} from '@mui/material';
import { useTheme } from '@mui/material';

export default function Services() {
  const theme = useTheme();
  const matchesSmallscreen = useMediaQuery(theme.breakpoints.down('lg'));
  return (
    <Box
      sx={{
        flexGrow: 1,
        padding: 4,
        backgroundColor: 'black',
        height: matchesSmallscreen ? 'auto' : '100dvh'
      
      }}
    >
      <Typography
        variant='h4'
        gutterBottom
        align='center'
        color='white'
        sx={{ marginTop: 8, marginBottom: 3, fontWeight: 'bold' }}
      >
        SERVICES
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <PhotoCard imageSrc={ServicePhoto} />
      </Box>
      <Grid container sx={{ display: 'flex', justifyContent: 'center'}}>
      <Grid size={{ lg:6, sm: 12}} sx={{ display: 'flex', justifyContent: 'center', }}>
        <Typography variant='body1' sx={{ color: 'white', mt: 4,}}>
          With over a decade of experience in the audio industry, I specialize
          in a wide range of services, including audio engineering, sound
          design, music production, scoring, mixing and mastering, and dialogue
          editing. Whether working on short films, podcast recording and
          editing, or songwriting, I bring a versatile skill set to every
          project. I’ve collaborated with numerous artists and have a strong
          background in commercial and brand work. Additionally, I offer
          expertise in crafting effective audio marketing strategies, ensuring
          that every sound element resonates with its intended audience. My
          extensive experience allows me to bring your audio vision to life with
          precision and creativity.
        </Typography>
      </Grid>
      </Grid>
    </Box>
  );
}
