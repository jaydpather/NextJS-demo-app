export default class ShoppingCartService{
    constructor(shoppingCartRepository){
        this.shoppingCartRepository = shoppingCartRepository;
    }

    addToCart(productDisplayId){
        //console.log("addToCart" + productDisplayId);
        this.shoppingCartRepository.addToCart(productDisplayId);
    }
}