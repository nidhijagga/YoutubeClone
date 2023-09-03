import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { YOUTUBE_SUGGESTIONS_API } from "../Utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { cacheResults } from "../Utils/searchSlice";
const CenterHead = () => {
  const [searchInput, setSearchInput] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SUGGESTIONS_API + searchInput);
    const json = await data.json();
    setSuggestions(json[1]);
    dispatch(cacheResults({
      [searchInput] : json[1]
    }))
  };

  const searchCache = useSelector((store) => store.search);
  const dispatch = useDispatch();
  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchInput]) {
        setSuggestions(searchCache[searchInput]);
      } else {
        getSearchSuggestions();
      }
    }, 200); 

    return () => {
      clearTimeout(timer);
    };
  }, [searchInput]);

  useEffect(() => {
    const handleScroll = () => {
      setShowSuggestions(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="col-span-9 p-3 mb-2">
      <div>
        <input
          value={searchInput}
          onChange={(event) => {
            setSearchInput(event.target.value);
          }}
          onFocus={() => {
            setShowSuggestions(true);
          }}
          onBlur={() => {
            setShowSuggestions(false);
          }}
          type="text"
          className="w-1/2 border border-gray-400 p-1 rounded-l-full"
        />
        <button className="border border-gray-400 py-1 px-4 bg-gray-200 rounded-r-full">
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>
      {showSuggestions && suggestions.length > 0 && (
        <div className="fixed bg-white py-2 px-1 w-[32rem] shadow-lg rounded-lg border border-gray-300">
          <ul>
            {suggestions.map((suggestion, index) => (
              <li
                key={index}
                className="m-1 py-1 px-1 shadow-sm hover:bg-gray-200 rounded-lg"
              >
                <FontAwesomeIcon icon={faSearch} />
                {suggestion}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CenterHead;
