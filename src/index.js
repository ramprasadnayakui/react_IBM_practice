import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

const store = configureStore();

import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

import App from './App';

ReactDOM.render(  
    <Provider store={store}>  
        <Router> 
            <App />
        </Router>
    </Provider>,
    document.getElementById('root')
    );
