import React, { Component } from "react";
import {
  Route,
  NavLink,
  Link,
  StaticRouter,
  Switch,
  HashRouter, 
} from "react-router-dom";

import Default from '../components/Default';
import Product from '../components/Product';
import PurchaseComplete from '../components/Purchase Complete';



export default function Index(){

    return (
        <div>
            
            <HashRouter>
                <div>
                    <NavLink to="/">Home</NavLink>
                    &nbsp;&nbsp;
                    <NavLink to="/purchaseComplete">Purchase Complete</NavLink>
                </div>    
                <div>
                    <Route exact path="/" Component={Default} />      
                    <Route path="/purchaseComplete" Component={PurchaseComplete} />
                </div>
            </HashRouter>
        </div>
    );
}

/*
<StaticRouter location="/" context={staticContext}>
                <div>
                    <NavLink to="/">Home</NavLink>
                    &nbsp;&nbsp;
                    <NavLink to="/purchaseComplete">Purchase Complete</NavLink>
                </div>    
                <div>
                    <Switch>
                        <Route exact path="/" Component={Default} />              
                        <Route path="/purchaseComplete" Component={PurchaseComplete} />
                    </Switch>
                </div>
            </StaticRouter>
*/