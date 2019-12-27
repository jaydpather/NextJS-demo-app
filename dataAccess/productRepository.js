export default class ProductRepository{
    /*
    ALL Data Access classes return hardcoded values!
    In a real app, these classes would call the back-end.
      * the back-end could have multiple layers of logic and data access
    
    */

    constructor(){

    }

    getProducts(){
        return[
            [{displayId: "MW0MW01234"}, {displayId: "MW0MW01235"}, {displayId: "MW0MW01236"}, ],
            [{displayId: "MW0MW02234"}, {displayId: "MW0MW02235"}, {displayId: "MW0MW02236"}, ],
            [{displayId: "MW0MW03234"}, {displayId: "MW0MW03235"}, {displayId: "MW0MW03236"}, ],
            [{displayId: "MW0MW04234"}, {displayId: "MW0MW04235"}, {displayId: "MW0MW04236"}, ],
        ];
    }
}
