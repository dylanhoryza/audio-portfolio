import {useMediaQuery} from '@mui/material';
import { useTheme } from '@mui/material';

type YouTubeVideoProps = {
  videoId: string;
};

const YouTubeVideo = ({ videoId, ...props }: YouTubeVideoProps) => {
  const theme = useTheme();
  const matchesSmallscreen = useMediaQuery(theme.breakpoints.down('lg'));
  const embedUrl = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div style={{ marginBottom: 20 }}>
      <iframe
        className='youtube-box-page'
        width='100%'
        height={matchesSmallscreen ? '300' : '500'}
        src={`${embedUrl}?&modestbranding=1`}
        title='YouTube video player'
        frameBorder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowFullScreen
        {...props}
      ></iframe>
    </div>
  );
};

export default YouTubeVideo;
