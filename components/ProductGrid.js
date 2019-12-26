import Product from "./Product";

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
                {createArray(props.height).map(x => 
                <tr>
                    {createArray(props.width).map(x => 
                    <td>
                        <Product />
                    </td>
                    )}
                </tr>
                )}
            </tbody>
        </table>
    );
}