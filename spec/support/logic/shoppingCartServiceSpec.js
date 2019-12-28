import ShoppingCartRepository from '../../../localDataAccess/shoppingCartRepository'
import ShoppingCartService from '../../../logic/shoppingCartService'

describe("ShoppingCartService", function(){
    var shoppingCartRepository = null;
    var shoppingCartService = null;

    beforeEach(function(){
        shoppingCartRepository = new ShoppingCartRepository();
        shoppingCartService = new ShoppingCartService(shoppingCartRepository);
    });

    it("addToCart should call repository", function(){
        spyOn(shoppingCartRepository, 'addToCart');

        shoppingCartService.addToCart("abc");

        expect(shoppingCartRepository.addToCart).toHaveBeenCalled();
    });
});