import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu, toggleMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import Livechat from "./Livechat";
const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  return (
    <div className="p-4 m-4 w-full">
      <div className="flex ">
        <div>
          <iframe
            width="800"
            height="400"
            src={"https://www.youtube.com/embed/" + searchParams.get("v")}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div className="w-full">
          <Livechat />
        </div>
      </div>
      <div className="w-[800px]">
        <CommentsContainer />
      </div>
    </div>
  );
};

export default WatchPage;
