function btnShowCart_Click(props){
    props.onClick();
}

export default function ShoppingCartButton(props){
    return (
        <button type="button" onClick={() => btnShowCart_Click(props)} className="btn btn-primary" data-toggle="modal" data-target={props.dataTarget}>
            Open Shopping Cart
        </button>
    );
}