import LocalStorageRepository from "../../../localDataAccess/localStorageRepository";
import ShoppingCartService, { ShoppingCartServicePure } from '../../../logic/shoppingCartService'

//todo: debug all UTs
//todo: how do you debug unit tests?
//is this even possible? (you are compiling to es2015 with babel)

describe("ShoppingCartService:", function(){
    var localStorageRepository = null;
    var shoppingCartService = null;

    beforeEach(function(){
        localStorageRepository = new LocalStorageRepository();
        shoppingCartService = new ShoppingCartService(localStorageRepository);

        spyOn(localStorageRepository, 'getItem').and.returnValue('{"abc":"1"}');
        spyOn(localStorageRepository, 'setItem');
    });

    it("addToCart should call repository", function(){
        shoppingCartService.addToCart("abc");

        expect(localStorageRepository.getItem).toHaveBeenCalled();
        expect(localStorageRepository.setItem).toHaveBeenCalled();
    });

    it("loadCart should call repository", function(){
        shoppingCartService.loadCart();

        expect(localStorageRepository.getItem).toHaveBeenCalled();
    });

    it("saveCart should call repository", function(){
        shoppingCartService.saveCart({});
        expect(localStorageRepository.setItem).toHaveBeenCalled();
    });
});

describe("ShoppingCartServicePure:", function(){
    var shoppingCartServicePure = null;

    beforeEach(function(){
        shoppingCartServicePure = new ShoppingCartServicePure();
    });

    describe("handleNullCart:", function(){
        it("should return new object if param is null", function(){
            var result = shoppingCartServicePure.handleNullCart(null);
            expect(result).not.toBe(null);
        });
    
        it("should return the param it was sent, if param is NOT null", function(){
            var existingCart = { };
            var result = shoppingCartServicePure.handleNullCart(existingCart);
            expect(result).toBe(existingCart);
        });
    });

    describe("getNewQuantity:", function(){
        it("should return quantityDelta if item is not in cart", function(){
            var quantityDelta = 1
            var result = shoppingCartServicePure.getNewQuantity({ }, "abc", quantityDelta);

            expect(result).toBe(quantityDelta);
        });

        it("should return (quantityDelta+existingQuantity) if item is in cart", function(){
            var existingQuantity = 1;
            var quantityDelta = 1
            var result = shoppingCartServicePure.getNewQuantity({ "abc": existingQuantity }, "abc", quantityDelta);

            expect(result).toBe(existingQuantity + quantityDelta);
        });
    });

    describe("modifyQuantity", function(){
        it("should create cart and add product if cart is null", function(){
            var productDisplayId = "abc";
            var quantityDelta = 1

            var newCart = shoppingCartServicePure.modifyQuantity(null, productDisplayId, quantityDelta);

            expect(newCart).not.toBe(null);
            
            var hasItemInCart = newCart.hasOwnProperty(productDisplayId);
            expect(hasItemInCart).toBeTrue();

            var qty = newCart[productDisplayId];
            expect(qty).toBe(quantityDelta);
        });

        it("should add product to cart if product is not in cart", function(){
            var cart = { "abc": 1 }
            var productDisplayId = "def";
            var quantityDelta = 1

            var newCart = shoppingCartServicePure.modifyQuantity(cart, productDisplayId, quantityDelta);

            expect(newCart).not.toBe(null);
            
            //verify items from old cart are still in new cart:
            for(var oldProductDisplayId in cart){
                var hasProperty = newCart.hasOwnProperty(oldProductDisplayId);
                expect(hasProperty).toBeTrue();
            }

            var hasItemInCart = newCart.hasOwnProperty(productDisplayId);
            expect(hasItemInCart).toBeTrue();

            var qty = newCart[productDisplayId];
            expect(qty).toBe(quantityDelta);
        });

        it("should update quantity if product is in cart", function(){
            var existingQuantity = 1;
            var cart = { "abc": 1, "def": existingQuantity }
            var productDisplayId = "def";
            var quantityDelta = 1

            var newCart = shoppingCartServicePure.modifyQuantity(cart, productDisplayId, quantityDelta);

            expect(newCart).not.toBe(null);
            
            //verify items from old cart are still in new cart:
            for(var oldProductDisplayId in cart){
                var hasProperty = newCart.hasOwnProperty(oldProductDisplayId);
                expect(hasProperty).toBeTrue();
            }

            var hasItemInCart = newCart.hasOwnProperty(productDisplayId);
            expect(hasItemInCart).toBeTrue();

            var qty = newCart[productDisplayId];
            expect(qty).toBe(existingQuantity + quantityDelta);
        });
    });
});