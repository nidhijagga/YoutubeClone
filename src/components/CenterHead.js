import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
const CenterHead = () => {
  return (
    <div className="col-span-9 p-3">
      <input
        type="text"
        className="w-1/2 border border-gray-400 p-1 rounded-l-full"
      />
      <button className="border border-gray-400 py-1 px-4 bg-gray-200 rounded-r-full">
        <FontAwesomeIcon icon={faSearch} />
      </button>
    </div>
  );
};

export default CenterHead;
