import React, { useState } from 'react';
import { Box, LinearProgress, IconButton, Typography } from '@mui/material';
import { styled } from '@mui/system';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

interface Story {
  id: number;
  imageUrl: string;
  title: string;
  content: string;
  position: 'top' | 'bottom';
}

interface WebStoriesProps {
  stories: Story[];
}

const StoryContainer = styled('div')({
  height: '100vh',
  width: '100vw',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  overflow: 'hidden',
});

const ImageContainer = styled(Box)({
  height: '100%',
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
});

const InnerImageContainer = styled(Box)({
  height: '100%',
  maxWidth: '100%',
  position: 'relative',
});

const ProgressBarContainer = styled(Box)({
  position: 'absolute',
  top: 0,
  width: '100%',
  display: 'flex',
  zIndex: 10,
});

const ProgressBar = styled(LinearProgress)({
  flex: 1,
  margin: '0 2px',
});

const NavigationButton = styled(IconButton)({
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  color: 'white',
  zIndex: 10,
});

const StoryImage = styled('img')({
  height: '100%',
  maxWidth: '100%',
  objectFit: 'cover',
});

interface TextOverlayProps {
  position: 'top' | 'bottom';
  children: React.ReactNode;
}

const TextOverlay: React.FC<TextOverlayProps> = ({ position, children }) => (
  <Box
    sx={{
      position: 'absolute',
      width: '100%',
      backgroundColor: 'rgb(0 0 0 / 72%)',
      color: 'white',
      padding: '10px',
      boxSizing: 'border-box',
      top: position === 'top' ? 0 : 'auto',
      bottom: position === 'bottom' ? 0 : 'auto',
      marginBottom: '100px',
      marginTop: '100px',
    }}
  >
    {children}
  </Box>
);

const WebStories: React.FC<WebStoriesProps> = ({ stories }) => {
  const [activeSlide, setActiveSlide] = useState(0);

  const handleNext = () => {
    if (activeSlide >= stories.length - 1) {
      setActiveSlide(0);
    } else {
      setActiveSlide((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (activeSlide > 0) {
      setActiveSlide((prev) => prev - 1);
    }
  };

  return (
    <StoryContainer>
      <ImageContainer>
        <InnerImageContainer>
          <ProgressBarContainer>
            {stories.map((story, index) => (
              <ProgressBar
                key={story.id}
                variant="determinate"
                value={index < activeSlide ? 100 : index === activeSlide ? 100 : 0}
              />
            ))}
          </ProgressBarContainer>
          {activeSlide > 0 &&
            <NavigationButton style={{ left: 0 }} onClick={handlePrev}>
              <ArrowBackIosIcon />
            </NavigationButton>
          }
          {stories.length - 1 !== activeSlide &&
            <NavigationButton style={{ right: 0 }} onClick={handleNext}>
              <ArrowForwardIosIcon />
            </NavigationButton>
          }
          <StoryImage src={stories[activeSlide].imageUrl} style={{ pointerEvents: 'none' }} />
          <TextOverlay position={stories[activeSlide].position}>
            <Typography variant="h6">{stories[activeSlide].title}</Typography>
            <Typography variant="body1">{stories[activeSlide].content}</Typography>
          </TextOverlay>
        </InnerImageContainer>
      </ImageContainer>
    </StoryContainer>
  );
};

export default WebStories;