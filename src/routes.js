import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './pages/Home';
import MapPage from "./pages/Map";


const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/mappage" component={MapPage} />
            </Switch>
        </BrowserRouter>
    )

}

export default Routes;