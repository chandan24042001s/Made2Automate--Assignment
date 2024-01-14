const ShimmerRes = () => {
    return (
      <div>
      <a className="relative w-[15%] ml-4 rounded-t-[50%] h-[40px] block overflow-hidden mb-2 ">
        <span id="loader-element"></span>
      </a>
      <div className=" h-7 border-red-500 mb-2 w-[18%] h-2">
        <span id="loader-element"></span>
      </div>
      <div className=" h-7 border-red-500 mb-2 w-[18%] h-2">
        <span id="loader-element"></span>
      </div>
      <div className=" h-7 border-red-500 mb-2 w-[18%] h-2">
        <span id="loader-element"></span>
      </div>
      <a className="relative w-[15%] ml-4 rounded-b-[15px] h-[30px] block overflow-hidden mb-2 ">
        <span id="loader-element"></span>
      </a>
    </div>
    );
  };
  
  export default ShimmerRes;