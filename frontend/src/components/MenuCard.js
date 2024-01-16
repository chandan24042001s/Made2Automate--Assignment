import user from "../Images/burger.png";
import { useDispatch } from "react-redux";

import { useState } from "react";
import { swiggyIMageCDN } from "../../constant";
import { addItem, clearCart, removeItem } from "../utils/cartSlice";
addItem;
const MenuCard = (props) => {
  const { dishData } = props;
  const { name, price, description, imageId, defaultPrice } =
    dishData?.card?.info;
  const [itemCount, setItemCount] = useState(0);

  const imageSource = imageId === undefined ? user : swiggyIMageCDN + imageId;

  const dispatch = useDispatch();

  const handleClick = (item) => {
    // Dispatch an action
    setItemCount(itemCount + 1);
    dispatch(addItem(item));
  };

  const removeItemClick = (item) => {
    if (itemCount === 0) {
      return;
    }

    setItemCount(itemCount - 1);
    dispatch(removeItem(item));
  };

  return (
    <>
        <div id="shadow" className="w-[250px] h-[280px] m-6 p-3 rounded-xl">
          <img
            className="h-[160px] w-72 rounded-2xl"
            src={imageSource}
            alt=""
          />
          <h2 className="font-bold text-lg">{name}</h2>
          <h4 className="text-sm">₹{price / 100 || defaultPrice / 100}</h4>
          {/* <p>{description}</p> */}
          <div id="menu-card-right">
            <div>
              <button onClick={() => removeItemClick(dishData)}>-</button>
              {itemCount === 0 ? "ADD" : itemCount}
              <button onClick={() => handleClick(dishData)}>+</button>
            </div>
        </div>
      </div>
    </>
  );
};

export default MenuCard;
