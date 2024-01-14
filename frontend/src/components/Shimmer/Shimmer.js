import React from "react";

const Shimmer = () => {
  return (
    <div>
      <a className="relative w-[30%] ml-4 rounded-t-[50%] h-[70px] block overflow-hidden mb-2 ">
        <span id="loader-element"></span>
      </a>
      <div className=" h-7 border-red-500 mb-2 w-[35%] h-4">
        <span id="loader-element"></span>
      </div>
      <div className=" h-7 border-red-500 mb-2 w-[35%] h-4">
        <span id="loader-element"></span>
      </div>
      <div className=" h-7 border-red-500 mb-2 w-[35%] h-4">
        <span id="loader-element"></span>
      </div>
      <a className="relative w-[30%] ml-4 rounded-b-[15px] h-[60px] block overflow-hidden mb-2 ">
        <span id="loader-element"></span>
      </a>
    </div>
  );
};

export default Shimmer;
