import React from "react";

const Shimmer = () => {
  return (
    <>
      <div className="flex flex-col items-center gap-10 mt-5 mb-10">
        <div
          className="flex  px-3 py-3 mb-2 w-[350px] h-[120px] rounded-lg"
          id="shadow"
        >
          <a className="relative w-[700px] h-[100px] block overflow-hidden mb-2">
            <span id="loader-element"></span>
          </a>
        </div>
        <div
          className="flex  px-3 py-3 w-[720px] h-[70px]  rounded-lg"
          id="shadow"
        >
          <a className="relative w-[700px] h-[50px] block overflow-hidden mb-2">
            <span id="loader-element"></span>
          </a>
        </div>
        <div
          className="flex  gap-1 px-3 py-3 w-[35rem] mb-5 h-[70px]  rounded-lg"
          id="shadow"
        >
          <a className="relative w-[30rem] h-[50px] block overflow-hidden mb-2">
            <span id="loader-element"></span>
          </a>
          <a className="relative w-28 h-[50px] block overflow-hidden mb-2">
            <span id="loader-element"></span>
          </a>
        </div>
      </div>

      <div className=" flex gap-12 ml-10 mt-4 flex-wrap justify-center">
        {Array(30)
          .fill(" ")
          .map((e, index) => (
            <>
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
            </>
          ))}
      </div>
    </>
  );
};

export default Shimmer;
