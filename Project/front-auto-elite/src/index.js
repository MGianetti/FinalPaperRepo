import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import App from './App';
import './index.css';
import * as serviceWorker from './serviceWorker';
import '@material-ui/core/'
import 'font-awesome/css/font-awesome.css'

ReactDOM.render(
    <BrowserRouter>
        <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
        />
        <App />
    </BrowserRouter>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();