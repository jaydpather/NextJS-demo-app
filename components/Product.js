import {
    NavLink,
  } from "react-router-dom";

export default function Product(props){
    return(
        <div className="card product">
            <div className='card-body'>
                <div>
                    {props.displayId}
                </div>
                <div className="ADD TO CART">
                    
                </div>
                <div>
                    <NavLink to="/purchaseComplete">BUY NOW</NavLink>
                </div>
            </div>
            <style jsx>{`
                .product{
                    margin-right: 1%;
                    margin-bottom: 1%;
                    display: inline-block;
                }
            `}</style>
        </div>
    );
}

/*

*/