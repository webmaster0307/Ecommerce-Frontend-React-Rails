import React from 'react';
import ReactDOM from 'react-dom';
import './stylesheets/index.css';
import './stylesheets/nav.css';
import './stylesheets/form.css';
import './stylesheets/products.css';
import './stylesheets/product.css';
import './stylesheets/categories.css';
import './stylesheets/businesses.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store.js'
import * as serviceWorker from './serviceWorker';



ReactDOM.render(<Provider store={ store }><BrowserRouter><App /></BrowserRouter></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
