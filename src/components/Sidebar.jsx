import React from "react";
import { useSelector } from "react-redux";
import store from "../utils/store";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  //Early return
  if (!isMenuOpen) return null;
  return (
    <div className="p-5 shadow-lg w-68">
      <ul className="space-y-4">
        <li>Home</li>
        <li>Shorts</li>
        <li>Subscriptions</li>
        <li>Your Channel</li>
        <li>History</li>
        <li>Your Videos</li>
        <li>Watch Later</li>
        <li>Your Courses</li>
        <li>Liked Videos</li>
        <li>Trending</li>
        <li>Music</li>
        <li>Shoping</li>
        <li>Live</li>
      </ul>
    </div>
  );
};

export default Sidebar;
