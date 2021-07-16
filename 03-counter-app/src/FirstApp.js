import React from 'react';  
import PropTypes from  'prop-types';

// import React, { Fragment } from 'react';  

// Functional Components
// props 
const FirstApp = ({ greeting, subtitle }) => {
    // const greeting = 'Hello World';




    return (
        <>
            <h1>{ greeting }  !!!</h1>
            {/* <pre> {  JSON.stringify( greeting, null, 3 ) } </pre> */}
            <p>{ subtitle }</p>
        </>
    );


} 

FirstApp.propTypes={
    greeting: PropTypes.string.isRequired
    // other = PropTypes.number.isRequired,
}

FirstApp.defaultProps = {
    subtitle: "I'm a Subtitle" ,
}

export default FirstApp;