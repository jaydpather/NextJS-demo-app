import { Route, Switch } from "react-router-dom"

import ProductService from '../logic/productService'
import ProductRepository from '../dataAccess/productRepository'

import PurchaseComplete from '../components/PurchaseComplete'
import ProductGrid from "../components/ProductGrid";


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
  /*
  spyOn(foo, "getBar").and.callFake(function(arguments, can, be, received) {
    return 1001;
  });
  */
  var productRepository = new ProductRepository();
  var productService = new ProductService(productRepository);

  return(
    <div>
      <h1>Welcome to my online store!</h1>
      <br/>
      <nav>
      </nav>

      <Switch>
        <Route path="/" exact render={(props) => <ProductGrid {...props} ProductService={productService} />} />
        <Route path="/purchaseComplete/" component={PurchaseComplete} />
        <Route component={NotFound}/>
      </Switch>
    </div>
  );
}

export default App;