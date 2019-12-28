export default class ShoppingCartService{
    constructor(localStorageRepository){
        this.localStorageRepository = localStorageRepository;
        this.localStorageKey = "shoppingCart";
    }

    addToCart(productDisplayId){
        var cart = this.getCart();
        var newCart = this.modifyQuantity(cart, productDisplayId, 1);
        this.setCart(newCart);
    }
    //TODO: unit tests for all methods

    getCart(){
        const jsonCart = this.localStorageRepository.getItem(this.localStorageKey);
        const cart = JSON.parse(jsonCart);
        return this.initCart(cart);
    }

    setCart(cart)
    {
        var jsonCart = JSON.stringify(cart);
        this.localStorageRepository.setItem(this.localStorageKey, jsonCart);
    }

    modifyQuantity(cart, productDisplayId, quantityDelta){        
        var newQty = this.getNewQuantity(cart, productDisplayId, quantityDelta);

        var newCart = {}; //going to do some side effects to this local var, which nobody else is referencing
        Object.assign(newCart, cart); //cart should be small enough that copying will not be slow. (less than 100 items and not called in a loop)
        //todo: load test to see how big the cart has to be before copying becomes a performance issue
        newCart[productDisplayId] = newQty;

        return newCart;
    }

    getNewQuantity(cart, productDisplayId, quantityDelta){
        var existingQty = (cart.hasOwnProperty(productDisplayId)) ? cart[productDisplayId] : 0;
        return existingQty + quantityDelta;
    }

    initCart(cart){
        if(cart != null)
            return cart;
        else
            return { };
    }
}