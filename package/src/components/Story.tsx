import React, { useState } from 'react';
import { Avatar, Dialog, DialogContent, Typography } from '@mui/material';
import Image from 'next/image';
import { styled } from '@mui/system';

interface Story {
  id: number;
  imageUrl: string;
}

const storiesData: Story[] = [
  { id: 1, imageUrl: '/images/story1.jpg' },
  { id: 2, imageUrl: '/images/story2.jpg' },
  { id: 3, imageUrl: '/images/story3.jpg' },
];

const StyledAvatar = styled(Avatar)({
  cursor: 'pointer',
  border: '2px solid green',
});

const StyledDialogContent = styled(DialogContent)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  overflowY: 'auto',
  padding: 0,
});

const StoryImageWrapper = styled('div')({
  width: '100%',
  maxWidth: '600px',
  height: '100%',
  maxHeight: '800px',
  marginBottom: '20px',
  position: 'relative',
});

const WebStories: React.FC = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <StyledAvatar onClick={handleClickOpen}>S</StyledAvatar>
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
        <StyledDialogContent>
          {storiesData.map((story) => (
            <StoryImageWrapper key={story.id}>
              <Image src={story.imageUrl} alt={`Story ${story.id}`} layout="fill" objectFit="cover" />
            </StoryImageWrapper>
          ))}
        </StyledDialogContent>
      </Dialog>
    </>
  );
};

export default WebStories;