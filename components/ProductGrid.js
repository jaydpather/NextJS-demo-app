import Product from "./Product";

//todo:
//  * load products from server
//      * server should return 1D array, client figures out how to make grid
//  * getProducts function should be in a separate file, right?
//      * this file should only have the React component
//      * list of products should be passed in as props
//  * where do we call the getProducts() function?
//      * need some place on the client side that isn't inside of a component

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