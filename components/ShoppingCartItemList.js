export default function ShoppingCartItemList(props){
    return props.dataSource.map( curItem => 
        <ShoppingCartItem Product={curItem.Product} Quantity={curItem.Quantity} />);
}

function ShoppingCartItem(props){
    return (
        <tr>
            <td>{props.Product}</td>
            <td>{props.Quantity}</td>
        </tr>
    );
}