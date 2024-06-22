"use client"
import { useState, useEffect } from 'react';
import React from 'react';
import { Card, CardActionArea, CardContent, CardMedia, Typography, CircularProgress, Box } from '@mui/material';
import './css/YoutubePreview.css';

interface YoutubePreviewProps {
  videoUrl: string;
}

interface EmbedData {
  title: string;
  author_name: string;
  thumbnail_url: string;
}

const YoutubePreview: React.FC<YoutubePreviewProps> = ({ videoUrl }) => {
  const [embedData, setEmbedData] = useState<EmbedData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const fetchEmbedData = async () => {
      setLoading(true);
      setError(false);
      try {
        const response = await fetch(
          `https://www.youtube.com/oembed?url=${encodeURIComponent(videoUrl)}&format=json`
        );

        if (!response.ok) {
          setEmbedData(null);
          setError(true);
          setLoading(false);
          return;
        }

        const data = await response.json();
        setEmbedData(data);
      } catch {
        setEmbedData(null);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchEmbedData();
  }, [videoUrl]);

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
        <CircularProgress />
      </Box>
    );
  }

  if (error || !embedData) {
    return (
      <Card className="youtube-preview">
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Unable to load video
          </Typography>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="youtube-preview">
      <CardActionArea href={videoUrl} target='_blank' rel='noopener noreferrer'>
        <CardMedia
          component="img"
          alt={embedData.title}
          height="auto"
          image={embedData.thumbnail_url}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {embedData.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {embedData.author_name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default YoutubePreview;