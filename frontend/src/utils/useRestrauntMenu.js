import { useEffect, useState } from "react";

const useRestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      `/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.5987633&lng=77.0786143&restaurantId=254009&catalog_qa=undefined&submitAction=ENTER`
    );

    const json = await data.json();
    setResInfo(json?.data);
  };

  return resInfo;
};

export default useRestaurantMenu;