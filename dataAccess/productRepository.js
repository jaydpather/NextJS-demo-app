export default class ProductRepository{
    /*
    ALL Data Access classes return hardcoded values!
    In a real app, these classes would call the back-end.
      * the back-end could have multiple layers of logic and data access
    
    UT's for Data Layer
      * data layer will have integration tests, not UT's
      * in a back-end project, you believe the data layer should just have integration tests, not UTs
        * b/c you have to create stub classes with persistence. (You can't use mocks).
        * therefore, you should just test with a real DB
        * you could have a bug in your persistence code, where it behaves differently than the real DB
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
