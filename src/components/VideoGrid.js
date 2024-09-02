import React from 'react';
import VideoCard from './VideoCard';
import '../styles/VideoGrid.css';
import Motivational from '../components/YT 3.jpg'
import Amazon from './YT 1.jpg'
import GOAT from './YT 2.jpg'
import HITMAN from  './YT 3.jpg'
import CHICKEN from './YT 4.jpeg'
import RESUME from './YT 6.jpeg'

function VideoGrid() {
  return (
    <div className="videoGrid">
      <VideoCard
        title="I Will Get It | Motivational Speech"
        channel="Motiversity"
        views="2M views"
        timestamp="2 hours ago"
        image={Motivational}
      />
      <VideoCard
        title="STAY HUNGRY - The Most Powerful Motivational Speech"
        channel="Motiversity"
        views="12M views"
        timestamp="10 months ago"
        image="https://i.ytimg.com/vi/yXQViqx6GMY/hqdefault.jpg"
      />
      <VideoCard
        title="A WFH Day in the Life of AMAZON Software Engineer"
        channel="Love Babbar"
        views="226K views"
        timestamp="12 hours ago"
        image={Amazon}
      />
      <VideoCard
        title="Git & GitHub in 15 minutes!"
        channel="Code for Cause"
        views="100M views"
        timestamp="10 days ago"
        image="https://i.ytimg.com/vi/RGOj5yH7evk/hqdefault.jpg"
      />
      <VideoCard
        title="GOAT TRAILER"
        channel="T series"
        views="1000M views"
        timestamp="10 days ago"
        image={GOAT}
      />
      <VideoCard
        title="Rohit Sharma 264(173) India vs Sri Lanka 4th ODI Match Highlights
"
        channel="ICC"
        views="2500M views"
        timestamp="5 Years ago"
        image={HITMAN}
      />
         <VideoCard
        title="FRIED CHICKEN LEGS | 500 Crispy Chicken Leg Fry Recipe Cooking in Village 
"
        channel="VILLAGE COOkING"
        views="2500M views"
        timestamp="5 Years ago"
        image={CHICKEN}
      />
      <VideoCard
        title="PERFECT RESUME IN 10MINS"
        channel="Love Babbar"
        views="226K views"
        timestamp="12 hours ago"
        image={RESUME}
      />
    </div>
  );
}

export default VideoGrid;