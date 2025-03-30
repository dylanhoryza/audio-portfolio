import { Box } from '@mui/material';

type PhotoCardProps = {
  imageSrc: string;
};

const PhotoCard = ({ imageSrc }: PhotoCardProps) => {
  return (
    <Box
      sx={{
        borderRadius: 2,
        overflow: 'hidden',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
        transition: 'transform 0.3s ease-in-out',
        '&:hover': {
          transform: 'scale(1.05)',
        },
      }}
    >
      <img src={imageSrc} style={{ width: 'auto', height: '100%', maxHeight: '500px' }} />
    </Box>
  );
};

export default PhotoCard;
