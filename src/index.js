import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import App from './App';
import axios from 'axios';

//Config 
const zevioo = document.getElementById('zevioo-widget_products')

// Append Style 
var style_tag = document.createElement('link');
style_tag.setAttribute("rel","stylesheet");
style_tag.setAttribute("href","https://zevioo.com/widgets/css/zeviooProductWidget.css");
(document.getElementsByTagName("head")[0] || document.documentElement).appendChild(style_tag);


axios.defaults.baseURL = 'https://api.zevioo.com/main.svc/';

ReactDOM.render(<App />, zevioo)
