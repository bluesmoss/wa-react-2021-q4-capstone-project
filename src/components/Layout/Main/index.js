import React from "react";
import { Switch, Route } from "react-router-dom";
import { Home, Product, Products, Search, Cart, Checkout } from "../../../pages"
import { StyledMain } from './styled'

function Main(){

    return (
        <StyledMain>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/home" component={Home} />
                <Route exact path="/products" component={Products} />
                <Route exact path="/product/:productId" component={Product} />
                <Route exact path="/shopping-cart" component={Cart} />
                <Route exact path="/checkout" component={Checkout} />
                <Route path="/search" component={Search} />
                <Route path="*" render={() => <h1>Not found!</h1>} />
            </Switch>
        </StyledMain>
    )
}
export { Main }