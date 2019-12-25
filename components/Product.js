import {
    NavLink,
  } from "react-router-dom";

export default function Product(){
    return(
        <div>
            <div>
                product name
            </div>
            <div>
                <NavLink to="/purchaseComplete">BUY NOW</NavLink>
            </div>
        </div>
    );
}