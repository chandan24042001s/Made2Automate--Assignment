import { useContext } from "react";
import { swiggyIMageCDN } from "../../constant";
import info1 from "../utils/userContext";

const RestrauntCard = () => {
  const { user } = useContext(info1);
  return (
    <div>
      <div id="shadow" className="w-[250px] h-[320px] m-6 p-3 rounded-xl">
        <img
          className="h-[160px] w-72 rounded-2xl"
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/6dc3ed2ca21d71acff7c2a51dfe4c720"
        />
        <h2 className="font-bold text-lg">McDonald's</h2>
        <h4 className="text-sm">American</h4>
        <div className="bg-LightGreen h-8 rounded-lg w-14 mt-2 text-Secondry flex justify-center items-center text-sm">
          <i class="fa-solid fa-star p-1"></i>
          4.2
        </div>

        {/* <h4>{user.name}</h4>

          <h4> {user.email} </h4> */}
      </div>
    </div>
  );
};

export default RestrauntCard;

/***
 * app.js(props)
 *   <BODY user/>
 *      >restrauntcard.js user/>
 * `      <{user}
 */
