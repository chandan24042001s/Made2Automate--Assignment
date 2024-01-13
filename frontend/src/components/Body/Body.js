import React from 'react'
import useRestaurantMenu from '../../utils/useRestrauntMenu'
import Shimmer from '../Shimmer/Shimmer';

const Body = () => {
    const data=useRestaurantMenu(254009);
    console.log(data)
  return (
    <div>
        <Shimmer/>
    </div>
  )
}

export default Body