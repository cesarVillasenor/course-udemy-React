import React from 'react';
import ReactDOM from 'react-dom';
// import FirstApp from './FirstApp';
import CounterApp from './CounterApp';

import './index.css';

const divRoot = document.querySelector('#app');


ReactDOM.render( <CounterApp counter={ 10 } />, divRoot );




