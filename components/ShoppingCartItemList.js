function ShoppingCartItemList(props){

    if(props.dataSource.length != 0){
        return props.dataSource.map( curItem => 
            <ShoppingCartItem Product={curItem.Product} Quantity={curItem.Quantity} />);
    }
    else{
        return (
            <ShoppingCartEmpty />
        );
    }
}

function ShoppingCartItem(props){
    return (
        <tr>
            <td>{props.Product}</td>
            <td>{props.Quantity}</td>
        </tr>
    );
}

function ShoppingCartEmpty(){
    return (
        <tr>
            <td colSpan="2">
                You have no items in your cart.
            </td>
        </tr>
    );
}

function ShoppingCartFooter(cartDataSource){
    //todo: find the total with reduce:
    //.reduce((total, current) => total + current);
    var totalQuantity = 0;
    for(var i=0; i < cartDataSource.length; i++) {
        totalQuantity += cartDataSource[i].Quantity;
    }
    
    return(
        <tr>
            <td>Total:</td>
            <td>{totalQuantity}</td>
        </tr>
    );
}

export {
    ShoppingCartItemList, ShoppingCartFooter
}