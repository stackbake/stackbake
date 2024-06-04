import { useState, useEffect } from 'react';
import './css/YoutubePreview.css';

const YoutubePreview = ({ videoUrl }) => {
  const [embedData, setEmbedData] = useState(null);

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

  console.log(embedData)

  return (
    <a href={videoUrl} target='_blank'>
    <div className="video-card">
      <h3>{embedData.title}</h3>
      <p>{embedData.author_name}</p>
      <img src={embedData.thumbnail_url} alt={embedData.title} />
    </div>
    </a>
  );
};

export default YoutubePreview;