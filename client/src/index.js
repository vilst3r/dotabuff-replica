import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import Header from './components/header';
import Content from './components/content';
// import Footer from './footer'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Header />, document.getElementById('header'));
ReactDOM.render(<Content />, document.getElementById('content'));
// ReactDOM.render(<Footer />, document.getElementById('footer'));

registerServiceWorker();
