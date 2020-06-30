import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import IndexPage from './pages/index';
import AboutPage from './pages/about';
import ProdutePage from './pages/produto';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={IndexPage} />
                <Route path="/about" component={AboutPage} />
                <Route path="/produto" component={ProdutePage} />
            </Switch>
        </BrowserRouter>
    );
}