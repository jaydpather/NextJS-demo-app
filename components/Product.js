import {
    NavLink,
  } from "react-router-dom";

export default function Product(props){
    return(
        <div className="card border-primary">
            <div className='card-body'>
                <div>
                    {props.displayId}
                </div>
                <div>
                    <NavLink to="/purchaseComplete">BUY NOW</NavLink>
                </div>
            </div>
            <style jsx>{`
                .border-primary{
                    border-style: solid;
                }
            `}</style>
        </div>
    );
}