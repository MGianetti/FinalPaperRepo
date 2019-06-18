import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'font-awesome/css/font-awesome.css'
import './index.css';
import LoginPage from './components/login/login';

let auth = true;

ReactDOM.render(
    <BrowserRouter>
        <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
        />
        <Switch>
            <Route path="/Login" component={LoginPage} />
            { auth === true && <Route path="/" component={App} />}
        </Switch>
    </BrowserRouter>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
