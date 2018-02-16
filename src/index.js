import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import App from './App';
import axios from 'axios';

//Config 
const zevioo = document.getElementById('zevioo-widget_products')



axios.defaults.baseURL = 'https://api.zevioo.com/main.svc/';

ReactDOM.render(<App />, zevioo)
