"use client"
import { useState, useEffect } from 'react';
import './css/YoutubePreview.css';
import React from 'react';

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

  useEffect(() => {
    const fetchEmbedData = async () => {
      try {
        const response = await fetch(
          `https://www.youtube.com/oembed?url=${encodeURIComponent(videoUrl)}&format=json`
        );

        if (!response.ok) {
          setEmbedData(null);
          return;
        }

        const data = await response.json();
        setEmbedData(data);
      } catch {
        setEmbedData(null);
      }
    };

    fetchEmbedData();
  }, [videoUrl]);

  if (!embedData) {
    return null;
  }

  return (
    <a href={videoUrl} target='_blank' rel='noopener noreferrer'>
      <div className="video-card">
        <h3>{embedData.title}</h3>
        <p>{embedData.author_name}</p>
        <img src={embedData.thumbnail_url} alt={embedData.title} />
      </div>
    </a>
  );
};

export default YoutubePreview;