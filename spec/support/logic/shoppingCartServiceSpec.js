import LocalStorageRepository from "../../../localDataAccess/localStorageRepository";
import ShoppingCartService from '../../../logic/shoppingCartService'

describe("ShoppingCartService", function(){
    var localStorageRepository = null;
    var shoppingCartService = null;

    beforeEach(function(){
        localStorageRepository = new LocalStorageRepository();
        shoppingCartService = new ShoppingCartService(localStorageRepository);
    });

    it("addToCart should call repository", function(){
        spyOn(localStorageRepository, 'getItem').and.returnValue('{"abc":"1"}');
        spyOn(localStorageRepository, 'setItem');

        shoppingCartService.addToCart("abc");

        expect(localStorageRepository.getItem).toHaveBeenCalled();
        expect(localStorageRepository.setItem).toHaveBeenCalled();
    });
});