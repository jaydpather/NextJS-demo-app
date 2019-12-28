import Product from "./Product";

export default function ProductGrid(props){
    return(
        <div className="container">
            {props.ProductService.getProducts().map(row => 
                row.map(product => <Product displayId={product.displayId} />)
            )}
        </div>
    );
}