import React from "react";
import { Switch, Route } from "react-router-dom";
import { Home, Products } from "../../../pages"
import { StyledMain } from './styled'

function Main(){

    return (
        <StyledMain>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/home" component={Home} />
                <Route exact path="/products" component={Products} />
                <Route render={() => <h1>Not found!</h1>} />
            </Switch>
        </StyledMain>
    )
}
export { Main }