import {
    NavLink,
  } from "react-router-dom";

export default function Product(){
    return(
        <div>
            <div className='border'>
                <div>
                    product name
                </div>
                <div>
                    <NavLink to="/purchaseComplete">BUY NOW</NavLink>
                </div>
            </div>
            <style jsx>{`
                .border{
                    border: solid 1px black;
                    display: inline-block;
                    padding: 5px;
                }
            `}</style>
        </div>
    );
}