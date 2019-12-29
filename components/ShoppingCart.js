import ShoppingCartItemList from './ShoppingCartItemList'
import ReactDOM from 'react-dom'

var _shoppingCartService = null; //todo: side effect. maybe just don't initialize it. then you're only assiging a value once. (except JS probably has a default value);

function ShoppingCart(props){
    _shoppingCartService = props.ShoppingCartService;

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
                        <table className="table table-striped table-sm">
                            <thead className="table-primary">
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

    var cart = _shoppingCartService.loadCart(); //todo: pass ShoppingCartService through props
    var cartDataSource = [];
    for(var curProductDisplayId in cart){
        cartDataSource.push({Product: curProductDisplayId, Quantity: cart[curProductDisplayId]});
    }

    ReactDOM.render(<ShoppingCartItemList dataSource={cartDataSource} />, tbody);
}

export{
    ShoppingCart, PopulateCartUI
}