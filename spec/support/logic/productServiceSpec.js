import ProductRepository from '../../../dataAccess/productRepository'
import ProductService from '../../../logic/productService'

describe("ProductService", function(){
    //const ProductRepository = require('../../../dataAccess/productRepository');
    var productRepository = null;

    //const ProductService = require('../../../logic/productService');
    var productService = null;

    beforeEach(function(){
        productRepository = new ProductRepository();
        productService = new ProductService(productRepository);
    });

    it("getProduct should call Repository", function(){
        productService.getProducts();
    });

    
});