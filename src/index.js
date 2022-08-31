import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import * as serviceWorker from './serviceWorker'
import reportWebVitals from './reportWebVitals';
//
import { legacy_createStore as createStore} from 'redux'
import { Provider } from 'react-redux';
import RootReducers from '../src/Services/Reducers/RootReducers'

const store=createStore(RootReducers)
console.warn("store data",store)
//
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
