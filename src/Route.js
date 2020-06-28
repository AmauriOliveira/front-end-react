import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import IndexPage from './pages/index';
import AboutPage from './pages/about';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={IndexPage} />
                <Route path="/about" component={AboutPage} />
            </Switch>
        </BrowserRouter>
    );
}