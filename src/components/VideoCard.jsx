import React from "react";
import { Link } from "react-router-dom";

const VideoCard = ({ videoId, info }) => {
  console.log(info);
  const { snippet, statistics } = info;
  const { title, thumbnails, channelTitle } = snippet;
  const { viewCount = 1 } = statistics;
  return (
    <div className=" grow w-72 h-78 shadow-lg hover:rounded-none rounded-xl overflow-hidden cursor-pointer">
      <Link to={`/watch?v=${videoId}`}>
        <img src={thumbnails?.maxres?.url || thumbnails?.high?.url} alt="" />
        <div className="flex flex-col p-4">
          <span>{title}</span>
          <span className="text-sm text-gray-600">{channelTitle}</span>
          <span className="text-sm text-gray-600">{viewCount[0] || "1"}M</span>
        </div>
      </Link>
    </div>
  );
};

export default VideoCard;
