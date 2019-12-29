import { ShoppingCartItemList, ShoppingCartFooter } from './ShoppingCartItemList'
import ReactDOM from 'react-dom'

var _shoppingCartService = null; //todo: side effect. maybe just don't initialize it. then you're only assiging a value once. (except JS probably has a default value);

function ShoppingCart(props){
    _shoppingCartService = props.ShoppingCartService;

    return (
        <div className="modal fade" id={props.id} tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Shopping Cart</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <table className="table table-striped table-sm">
                            <thead className="table-primary">
                                <tr>
                                    <th>Product</th>
                                    <th>Quantity</th>
                                </tr>
                            </thead>
                            <tbody id="shoppingCartTBody">
                            </tbody>
                            <tfoot id="shoppingCartTFoot" className="table-info">
                            </tfoot>
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
    var cart = _shoppingCartService.loadCart(); //todo: pass ShoppingCartService through props
    
    var cartDataSource = createCartDataSource(cart);
    populateCartBody(cartDataSource);
    populateCartFooter(cartDataSource);
}

function createCartDataSource(cart){ //this method converts a dictionary to an array
    var cartDataSource = [];
    for(var curProductDisplayId in cart){
        cartDataSource.push({Product: curProductDisplayId, Quantity: cart[curProductDisplayId]});
    }

    return cartDataSource;
}

function populateCartBody(cartDataSource){
    var tBody = document.getElementById("shoppingCartTBody"); //todo: can we avoid a call to getElementById? Seems like there should be a react function for this
    ReactDOM.render(<ShoppingCartItemList dataSource={cartDataSource} />, tBody);
}

function populateCartFooter(cartDataSource){
    var tFoot = document.getElementById("shoppingCartTFoot");
    ReactDOM.render(<ShoppingCartFooter dataSource={cartDataSource} />, tFoot);
}

export{
    ShoppingCart, PopulateCartUI
}