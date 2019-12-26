import { Route, Link, Switch } from "react-router-dom";
import { Redirect } from 'react-router'

import Product from '../components/Product'
import PurchaseComplete from '../components/PurchaseComplete'


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
        <Route path="/" exact component={Product} />
        <Route path="/purchaseComplete/" component={PurchaseComplete} />
        <Route component={NotFound}/>
      </Switch>
    </div>
  );
}

export default App;
