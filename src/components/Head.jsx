import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/contants";
import { json } from "react-router-dom";
import { cacheResults } from "../utils/searchSlice";
import { YOUTUBE_SEARCH_RESULTS_API } from "../utils/contants";
import VideoContainer from "./VideoContainer";
const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const searchCache = useSelector((store) => store.search);
  const dispatch = useDispatch();
  useEffect(() => {
    // make api call every time but if
    // the difference between 2 key press is less
    // than 200 ms decline api call.
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        // cacheing of search results
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200); // Debouncing with 200ms
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);
  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);
    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };

  const handleSearch = () => {
    // console.log("dataa");
    return <VideoContainer searchQuery={searchQuery} />;
  };

  const toggleMenuHandler = () => [dispatch(toggleMenu())];
  return (
    <div className="grid grid-flow-col ">
      <div className="flex items-center ml-5 col-span-1">
        <img
          className="h-8 m-4 cursor-pointer"
          src="https://cdn2.iconfinder.com/data/icons/interface-92/24/hamburger_menu_small_interface_optin-512.png"
          alt="menu"
          onClick={toggleMenuHandler}
        />
        <a href="/">
          <img
            className="h-14"
            src="https://t3.ftcdn.net/jpg/03/00/38/90/360_F_300389025_b5hgHpjDprTySl8loTqJRMipySb1rO0I.jpg"
            alt="icon"
          />
        </a>
      </div>
      <div className="flex items-center col-span-10">
        <input
          className="flex-intial w-1/2 px-4 py-1.5 mr-0.5 rounded-full border border-gray-300 focus:outline-none focus:border-blue-500"
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => setShowSuggestions(true)}
          onBlur={() => setShowSuggestions(false)}
        />
        <button className="bg-gray-300 p-2 rounded-full" onClick={handleSearch}>
          <img
            className="h-6 text-white"
            src="https://cdn3.iconfinder.com/data/icons/feather-5/24/search-512.png"
            alt="search"
          />
        </button>

        {showSuggestions && (
          <div className="absolute top-[4rem] bg-white w-[32rem] py-1 px-4 shadow-lg rounded-lg border border-gray-50">
            <ul>
              {suggestions.map((item) => (
                <li key={item} className="hover:bg-gray-100 py-1 px-1">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="flex items-center col-span-1">
        <img
          className="h-9"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCxanQgIy3Zk9wjYXsmjihLPdQ7vHN7eBw00wePYQdfA&s"
          alt="user"
        />
      </div>
    </div>
  );
};

export default Head;
