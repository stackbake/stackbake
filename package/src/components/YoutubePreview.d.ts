import React from 'react';

export interface YoutubePreviewProps {
  videoUrl: string;
}

declare const YoutubePreview: React.FC<YoutubePreviewProps>;

export default YoutubePreview;
