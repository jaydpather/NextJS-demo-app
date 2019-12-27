import Product from "./Product";

export default function ProductGrid(props){
    return(
        <table>
            <tbody>
                {props.ProductService.getProducts().map(row => 
                <tr>
                    {row.map(product => 
                    <td>
                        <Product displayId={product.displayId} />
                    </td>
                    )}
                </tr>
                )}
            </tbody>
        </table>
    );
}