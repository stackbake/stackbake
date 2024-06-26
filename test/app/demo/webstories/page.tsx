"use client";
import { WebStories } from 'nxtu';

const storiesData = [
  {
    id: 1, imageUrl: 'https://i.pinimg.com/736x/30/3a/0e/303a0eb9215fff7212ca3261920c09da.jpg',
    title: 'First Story',
    content: 'This is the content of the first story.',
    position: 'top'
  },
  {
    id: 2, imageUrl: 'https://i.pinimg.com/736x/9b/78/81/9b7881cfa38d86c762a41a6005290e8c.jpg', title: 'First Story',
    content: 'This is the content of the first story.',
    position: 'bottom'
  },
  {
    id: 3, imageUrl: 'https://i.pinimg.com/originals/e8/e3/37/e8e337c523f24546faae8082f4ed4e35.png', title: 'First Story',
    content: 'This is the content of the first story.This is the content of the first story.This is the content of the first story.This is the content of the first story.This is the content of the first story.This is the content of the first story.This is the content of the first story.This is the content of the first story.This is the content of the first story.',
    position: 'top'
  },
  {
    id: 3, imageUrl: 'https://marketplace.canva.com/EAEXKTgcHQE/1/0/900w/canva-stylish-abstract-watercoulour-quote-of-the-day-instagram-story-psF1RGxbXo8.jpg', title: 'First Story',
    content: 'This is the content of the first story.This is the content of the first story.This is the content of the first story.This is the content of the first story.This is the content of the first story.This is the content of the first story.This is the content of the first story.This is the content of the first story.This is the content of the first story.This is the content of the first story.',
    position: 'bottom'
  },

];

export default function Home() {
  return (
    <WebStories stories={storiesData} />
  );
}