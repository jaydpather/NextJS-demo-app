import Product from "./Product";

//todo:
//  * load products from server
//      * server should return 1D array, client figures out how to make grid
//  * getProducts function should be in a separate file, right?
//      * this file should only have the React component
//      * list of products should be passed in as props
//  * where do we call the getProducts() function?
//      * need some place on the client side that isn't inside of a component
function getProducts(){
    return[
        [{displayId: "MW0MW01234"}, {displayId: "MW0MW01235"}, {displayId: "MW0MW01236"}, ],
        [{displayId: "MW0MW02234"}, {displayId: "MW0MW02235"}, {displayId: "MW0MW02236"}, ],
        [{displayId: "MW0MW03234"}, {displayId: "MW0MW03235"}, {displayId: "MW0MW03236"}, ],
        [{displayId: "MW0MW04234"}, {displayId: "MW0MW04235"}, {displayId: "MW0MW04236"}, ],
    ];
}

function createArray(length){
    var retVal = [];

    for(var i=0; i<length; i++){
        retVal[i] = i;
    }

    return retVal;
}


export default function ProductGrid(props){
    return(
        <table>
            <tbody>
                {getProducts().map(row => 
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