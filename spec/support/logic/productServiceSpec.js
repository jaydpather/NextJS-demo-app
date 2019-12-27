import ProductRepository from '../../../dataAccess/productRepository'
import ProductService from '../../../logic/productService'

describe("ProductService", function(){
    var productRepository = null;
    var productService = null;

    beforeEach(function(){
        productRepository = new ProductRepository();
        productService = new ProductService(productRepository);
    });

    it("getProduct should call Repository", function(){
        spyOn(productRepository, 'getProducts'); //spyOn also prevents regular method from being called
        
        productService.getProducts();

        expect(productRepository.getProducts).toHaveBeenCalled();
    });

    
});