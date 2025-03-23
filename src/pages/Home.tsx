import { Box } from '@mui/material';
import Grid from '@mui/material/Grid2';
import HomePic from '../assets/IMG_2472.jpg';

export default function HomePage() {
  return (
    <Box sx={{ flexGrow: 1, maxWidth: '100%', padding: 0 }}>
      <Grid
        container
        direction='column'
        spacing={4}
        size={12}
        sx={{
          '.MuiContainer-root': {
            padding: '0 !important',
          },
        }}
      >
        {/* Section 1 */}
        <Grid size={12} sx={{ height: '900px', width: '100%' }}>
          <Box
            sx={{
              backgroundImage: `url(${HomePic})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center center',
              backgroundRepeat: 'no-repeat',
              padding: 2,
              position: 'relative',
              height: '100%',
              overflow: 'hidden',
              objectFit: 'contain',
              objectPosition: 'center',
            }}
          ></Box>
        </Grid>
      </Grid>
    </Box>
  );
}
