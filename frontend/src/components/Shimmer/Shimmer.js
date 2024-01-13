import React from "react";

const Shimmer = () => {
  return (
    <div>
      <a className="relative w-[100%] h-[160px] block overflow-hidden mb-2">
        <span id="loader-element"></span>
      </a>
      <div className=" h-7 mb-2 w-[120px] ">
        <span id="loader-element"></span>
      </div>
    </div>
  );
};

export default Shimmer;
