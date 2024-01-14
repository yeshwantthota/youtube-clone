import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessages } from "../utils/chatSlice";
import store from "../utils/store";
import { generateName } from "../utils/helper";

const Livechat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);
  useEffect(() => {
    const i = setInterval(() => {
      console.log("API Polling");
      dispatch(
        addMessages({
          name: generateName(),
          message: "Lorem Ipsum ulte site pite",
        })
      );
    }, 2000);
    return () => clearInterval(i);
  }, []);
  return (
    <>
      <div className="ml-2 p-2 border border-black w-full h-[400px] bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
        <div>
          {chatMessages.map((m, i) => (
            <ChatMessage key={i} name={m.name} message={m.message} />
          ))}
        </div>
      </div>
      <form
        className="w-full p-2 ml-2 border border-black rounded-md"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessages({
              name: "yeshwant Thota",
              message: liveMessage,
            })
          );

          setLiveMessage("");
        }}
      >
        <input
          type="text"
          className="w-[75%] text-gray-800 font-semibold outline-none"
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
        />
        <button className="ml-2 px-2 py-1 bg-neutral-900 w-[100px] rounded-lg text-white ">
          Send
        </button>
      </form>
    </>
  );
};

export default Livechat;
