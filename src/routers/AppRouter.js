
import React from 'react';
import { Router, Link, NavLink, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import LoginPage from '../components/LoginPage';
import MainScrollPage from '../components/MainScrollPage';
import ProfilePage from '../components/ProfilePage';
import PostPage from '../components/PostPage';
import NotFoundPage from '../components/NotFoundPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Switch>
                <PublicRoute path="/" component={LoginPage} exact={true} />
                <PrivateRoute path="/scroll" component={MainScrollPage} />
                <PrivateRoute path="/users/:uid" component={ProfilePage} />
                <PrivateRoute path="/posts/:pid" component={PostPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </Router>
);

export default AppRouter;

