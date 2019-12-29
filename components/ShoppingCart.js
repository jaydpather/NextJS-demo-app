import ShoppingCartItem from './ShoppingCartItem'
import ReactDOM from 'react-dom'

function ShoppingCart(props){
    return (
        <div className="modal fade" id={props.id} tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Shopping Cart</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <table>
                            <thead>
                                <th>Product</th>
                                <th>Quantity</th>
                            </thead>
                            <tbody id="shoppingCartTBody">
                            </tbody>
                        </table>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    );
}


function PopulateCartUI(){
    var tbody = document.getElementById("shoppingCartTBody"); //todo: can we avoid a call to getElementById? Seems like there should be a react function for this

    ReactDOM.render(<ShoppingCartItem />, tbody)
}

export{
    ShoppingCart, PopulateCartUI
}