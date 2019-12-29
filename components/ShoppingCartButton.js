function btnShowCart_Click(props){
    props.onClick(props);
}

export default function ShoppingCartButton(props){
    return (
        <button type="button" onClick={() => btnShowCart_Click(props)} className="btn btn-primary" data-toggle="modal" data-target={props.dataTarget}>
            Open Shopping Cart
        </button>
    );
}