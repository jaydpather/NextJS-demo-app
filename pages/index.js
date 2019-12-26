import { Route, Switch } from "react-router-dom";

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
  return(
    <div>
      <h1>Welcome to my online store!</h1>
      <nav>
      </nav>

      <Switch>
        <Route path="/" exact render={(props) => <ProductGrid {...props} />} />
        <Route path="/purchaseComplete/" component={PurchaseComplete} />
        <Route component={NotFound}/>
      </Switch>
    </div>
  );
}

export default App;