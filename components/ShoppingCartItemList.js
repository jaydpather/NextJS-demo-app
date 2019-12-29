export default function ShoppingCartItemList(props){
    return props.dataSource.map( curItem => 
        <ShoppingCartItem Product={curItem.Product} Quantity={curItem.Quantity} />);
}

function ShoppingCartItem(props){
    return (
        <tr>
            <td className="gridCell">{props.Product}</td>
            <td className="gridCell">{props.Quantity}</td>
        </tr>
    );
}