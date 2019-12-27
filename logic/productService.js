export default class ProductService{
    constructor(productRepository){
        this.ProductRepository = productRepository;
    }

    getProducts(){
        return this.ProductRepository.getProducts();
    }
}



    