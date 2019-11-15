import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducer/rootReducer';

const store = createStore(rootReducer);
//need to create reducer which interact with the store
// providing access to the store in react app
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
//we gonna pass store, it provide our application with store, store interact with App at later time
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
