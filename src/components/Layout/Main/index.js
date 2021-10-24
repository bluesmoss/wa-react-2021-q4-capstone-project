import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import { Home } from "../../Pages/Home"
import { StyledMain } from './styled'

function Main(){

    return (
        <StyledMain>
            <Router basename="/wa-react-2021-q4-capstone-project">
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/home" component={Home} />
                    <Route render={() => <h1>Not found!</h1>} />
                </Switch>
            </Router>
        </StyledMain>
    )
}
export { Main }