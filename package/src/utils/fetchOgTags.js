// utils/fetchOgTags.js
import cheerio from 'cheerio';

export const fetchOgTags = async (url) => {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Failed to fetch the URL');
        }

        const html = await response.text();
        const $ = cheerio.load(html);
        const ogTags = {};

        $('meta[property^="og:"]').each((_, element) => {
            const property = $(element).attr('property');
            const content = $(element).attr('content');
            ogTags[property] = content;
        });

        return ogTags;
    } catch (error) {
        throw new Error(error.message);
    }
};