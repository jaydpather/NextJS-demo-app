export default function ShoppingCartButton(props){
    return (
        <button type="button" class="btn btn-primary" data-toggle="modal" data-target={props.dataTarget}>
            Open Shopping Cart
        </button>
    );
}