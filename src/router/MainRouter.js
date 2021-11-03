import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Home from '../pages/Home'

function MainRouter() {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="*">
                    <div>404 not found</div>
                </Route>
            </Switch>
        </Router>
    )
}

export default MainRouter