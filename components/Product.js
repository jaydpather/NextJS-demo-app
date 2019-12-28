import { NavLink } from "react-router-dom"

function btnAddToCart_Click(props){
    props.ShoppingCartService.addToCart(props.displayId);
}

export default function Product(props){
    return(
        <div className="card product">
            <div className='card-body'>
                <div>
                    {props.displayId}
                </div>
                <div>

                <button type="button" className="btn btn-primary" onClick={() => btnAddToCart_Click(props) }>
                    Add to Cart
                </button>
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