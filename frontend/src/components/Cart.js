


import { useDispatch, useSelector } from "react-redux";
import MenuCard from "./MenuCard";
import { clearCart } from "./../utils/cartSlice";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const disptach = useDispatch();

  const handleClearCart = () => {
    disptach(clearCart());
  };

  return (
    <div id="cart" >
      <div id="cart-top" className="flex" >
        <h1>{cartItems.length === 0 ? "Empty Cart" : "Cart"}</h1>
        {cartItems.length > 0 && (
          <button onClick={handleClearCart}>
            Clear Cart <i id="trash-bin" class="ri-delete-bin-line"></i>
          </button>
        )}
      </div>

    <div className="flex flex-wrap">
    {cartItems?.map((item) => {
        return <MenuCard key={item?.card?.info?.id} dishData={item} />;
      })}
    </div>
    <div className=" mt-10 flex justify-center align-middle">
    { cartItems.length>0 && <Link to="/order">
      <button onClick={handleClearCart} className="text-3xl h-16 px-5 py-2 bg-Green text-White rounded-lg hover:bg-Red hover:text-Black">Checkout</button>
      </Link>}
    </div>
    </div>
  );
};

export default Cart;















// import React from 'react';
// import { useSelector } from 'react-redux';
// import store from '../utils/store';
// import FoodItem from './FoodItem';

// const Cart = () => {
//     const cartItems=useSelector((store)=>store.cart.items);
//   return (
//     <div>
//         <h1> Cart-Items-{cartItems.length}</h1>
//         {/* //<FoodItem {...cartItems[0]}/> */}
//         <div className='flex flex-wrap'>
//             {cartItems.map((item)=>(
//                 <FoodItem {...item}/>
//             ))}
//         </div>

//     </div>
//   )
// }

// export default Cart