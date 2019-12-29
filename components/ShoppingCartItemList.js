export default function ShoppingCartItemList(props){

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