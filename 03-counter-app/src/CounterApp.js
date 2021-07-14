import React, { useState } from 'react';
import PropTypes from  'prop-types';
//https://es.reactjs.org/docs/events.html

const CounterApp = ( { value = 10 } ) => {

    const [ counter, setCounter ] = useState( value );


    // handleAdd
    const handleAdd = (e) => {
        setCounter( counter + 1 );
        // setCounter( (c) => c + 1 )
    } 
    const handleReset = (e) => {
        setCounter( value );
    } 
    const handleSubstratct = (e) => {
        setCounter( counter - 1 );
    } 

    return <>
        <h1>Counter APP</h1>
        <h2> { counter } </h2>

        <button onClick={ handleAdd }> +1 </button>
        <button onClick={ handleReset }> reset </button>
        <button onClick={ handleSubstratct }> -1 </button>
    </>
};

CounterApp.propTypes = {
    counter: PropTypes.number
}

export default CounterApp;