import { Route, Switch } from "react-router-dom"

import ProductService from '../logic/productService'
import ShoppingCartService from "../logic/shoppingCartService";

import ProductRepository from '../dataAccess/productRepository'
import LocalStorageRepository from "../localDataAccess/localStorageRepository";

import PurchaseComplete from '../components/PurchaseComplete'
import ProductGrid from "../components/ProductGrid";
import { ShoppingCart, PopulateCartUI } from '../components/ShoppingCart';
import ShoppingCartButton from '../components/ShoppingCartButton';



function Status({ code, children }) {
  return (
    <Route
      render={({ staticContext }) => {
        if (staticContext) staticContext.status = code;
        return children;
      }}
    />
  );
}

function NotFound() {
  return (
    <>
      <Status code={404}/>
      <h2>Not found</h2>;
    </>
  )
}

function App() {
  const productRepository = new ProductRepository();
  const productService = new ProductService(productRepository);

  const localStorageRepository = new LocalStorageRepository();
  const shoppingCartService = new ShoppingCartService(localStorageRepository);

  return(
    <div>
      <h1>Welcome to my online store!</h1>
      <br/>
      <nav className="nav">
        <ShoppingCartButton dataTarget="#shoppingCart" onClick={PopulateCartUI} />
      </nav>

      <ShoppingCart id="shoppingCart" ShoppingCartService={shoppingCartService} />

      <Switch>
        <Route path="/" exact render={(props) => 
          <ProductGrid {...props} 
            ProductService={productService} 
            ShoppingCartService={shoppingCartService} 
          />} 
        />

        <Route path="/purchaseComplete/" component={PurchaseComplete} />
        
        <Route component={NotFound}/>
      </Switch>
      <style jsx>{`
        .nav{
          padding:1%;
        }    
      `}</style>
    </div>
  );
}

export default App;