import React, { useEffect, useState } from "react";
import {
  YOUTUBE_SEARCH_RESULTS_API,
  YOUTUBE_VIDEO_API,
} from "../utils/contants";
import VideoCard from "./VideoCard";
import mockData from "../utils/mockData.json";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    getVideos();
  }, []);
  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEO_API);
    const json = await data.json();
    setVideos(json.items);
  };

  // const getSearchVideos = async () => {
  //   const data = await fetch(YOUTUBE_SEARCH_RESULTS_API);
  //   const json = await data.json();
  //   setVideos(json.items);
  // };
  return (
    <div className="flex flex-wrap gap-4 p-4">
      {videos.map((video) => (
        <VideoCard key={video.id} videoId={video.id} info={video} />
      ))}
    </div>
  );
};

export default VideoContainer;
