// components/OgTagPreview.js
import { useState, useEffect } from 'react';
import { fetchOgTags } from '../utils/fetchOgTags';

const OgTagPreview = ({ url }) => {
    const [ogTags, setOgTags] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getOgTags = async () => {
            try {
                const tags = await fetchOgTags(url);
                setOgTags(tags);
            } catch (error) {
                setError(error.message);
            }
        };

        getOgTags();
    }, [url]);

    if (error) {
        return <p>Error: {error}</p>;
    }

    if (!ogTags) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            {Object.entries(ogTags).map(([property, content]) => (
                <div key={property}>
                    <strong>{property}:</strong> {content}
                </div>
            ))}
        </div>
    );
};

export default OgTagPreview;