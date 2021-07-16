import React from 'react';
import ReactDOM from 'react-dom';
import FirstApp from './FirstApp';
import CounterApp from './CounterApp';

import './index.css';

const divRoot = document.querySelector('#app');


// ReactDOM.render( <FirstApp greeting='Hello i am goku!' />, divRoot );
ReactDOM.render( <CounterApp counter={ 10 } />, divRoot );




