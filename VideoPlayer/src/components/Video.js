import * as React from 'react';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';


export const Video = ({videoUrl}) =>{
    console.log(videoUrl);
return(
    <Box
    component="ul"
    sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', p: 0, m: 0 }}
  >
     <Card component="li" sx={{ minWidth: 300, flexGrow: 1 }}>
        <CardCover>
          <video
            autoPlay
            loop
            muted
            autostart="true"
            src={videoUrl}
            
          >
            {/* <source
              src={videoUrl}
              type="video/mp4"
            /> */}
          </video>
        </CardCover>
        <CardContent>
          <Typography
            level="h6"
            fontWeight="lg"
            textColor="#fff"
            mt={{ xs: 12, sm: 18 }}
          >
           
          </Typography>
        </CardContent>
      </Card>
    </Box>
);
}

export default Video;