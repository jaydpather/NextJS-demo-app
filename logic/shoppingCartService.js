export class ShoppingCartServicePure{
    //todo: howcome I can instantiate this even though I didn't declare a constructor. (wasn't this a compile error on another class?)

    modifyQuantity(loadedCart, productDisplayId, quantityDelta){        
        var cart = this.handleNullCart(loadedCart);

        var newQty = this.getNewQuantity(cart, productDisplayId, quantityDelta);

        var newCart = {}; //going to do some side effects to this local var, which nobody else is referencing
        Object.assign(newCart, cart); //cart should be small enough that copying will not be slow. (less than 100 items and not called in a loop)
        //todo: load test to see how big the cart has to be before copying becomes a performance issue
        newCart[productDisplayId] = newQty;

        return newCart;
    }

    getNewQuantity(cart, productDisplayId, quantityDelta){
        //todo: should we call handleNullCart here too?
        var existingQty = (cart.hasOwnProperty(productDisplayId)) ? cart[productDisplayId] : 0;
        return existingQty + quantityDelta;
    }

    handleNullCart(cart){
        if(cart != null) //todo: test on different browsers. maybe the cart is undefined on some browsers
            return cart;
        else
            return { };
    }
}

export default class ShoppingCartService{
    constructor(localStorageRepository){
        this.LocalStorageRepository = localStorageRepository;
        this.localStorageKey = "shoppingCart";

        this.PureService = new ShoppingCartServicePure();
    }

    addToCart(productDisplayId){
        var cart = this.loadCart();
        var newCart = this.PureService.modifyQuantity(cart, productDisplayId, 1);
        this.saveCart(newCart);
    }
    //TODO: unit tests for all methods

    loadCart(){
        const jsonCart = this.LocalStorageRepository.getItem(this.localStorageKey);
        const cart = JSON.parse(jsonCart);
        return this.PureService.handleNullCart(cart);
    }

    saveCart(cart)
    {
        var jsonCart = JSON.stringify(cart);
        this.LocalStorageRepository.setItem(this.localStorageKey, jsonCart);
    }
}