import { useState } from "react";
import MenuCard from "./MenuCard";

const RestaurantCategory = (props) => {
  const { vegOption, resData, showItems, setMyIndex } = props;
  const { title, itemCards } = resData;

  const filteredVegItems = itemCards?.filter((dish) => {
    if (vegOption == true) {
      return dish?.card?.info?.itemAttribute.vegClassifier === "VEG";
    } else {
      return dish;
    }
  });

  if (filteredVegItems.length === 0) {
    return;
  }

  const handleClick = () => {
    setMyIndex();
  };

  return (
    <>
      <div className="flex h-14  ">
        {/* left list container */}
        <div>
          <div className="flex w-[300px] h-[50px]  flex-col ">
            <h1 htmlFor={title} onClick={handleClick}>
              {title}
              <span>
                <i className="ri-arrow-down-s-line"></i>
              </span>
            </h1>
          </div>
        </div>
        {/* right card container */}
        <div className="ml-10 w-full flex justify-between flex-wrap mr-10">
          {showItems &&
            filteredVegItems?.map((dish) => {
              return <MenuCard key={dish?.card?.info?.id} dishData={dish} />;
            })}
        </div>
      </div>
    </>
  );
};

export default RestaurantCategory;
