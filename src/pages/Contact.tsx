import { Box } from '@mui/material';
import Contact from '../components/Contact';
export default function ContactPage() {
  return (
    <Box
      sx={{
        flexGrow: 1,
        padding: 4,
        backgroundColor: 'black',
        height: '100dvh',
      }}
    >
      <Box sx={{ mt: 8 }}>
        <Contact />
      </Box>
    </Box>
  );
}
