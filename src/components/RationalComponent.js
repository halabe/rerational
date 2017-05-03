'use strict';
/*eslint no-console: ["error", { allow: ["log", "warn", "error"] }] */

import React from 'react';

require('styles/Rational.css');

let RationalComponent = (props) => {
    let value = props.value;
    let sign = (value.sign() < 0)? '-' : '';
    let absNum = Math.abs(value.num);
    let absDen = Math.abs(value.den);
    
    let whole = Math.floor(absNum/absDen);
    let remain = absNum%absDen;
    whole = (whole)? whole : (remain)? '' : '0';
    
    let wholeJsx = <span>{sign}{whole || ''}</span>
    let fractJsx = (remain)? <span><sup><small>{remain}</small></sup>&frasl;<sub><small>{absDen}</small></sub></span> : null
    return <span className="square" onClick={props.onClick} >{wholeJsx} {fractJsx}</span>;
};

RationalComponent.displayName = 'RationalComponent';

// Uncomment properties you need
// RationalComponent.propTypes = {};
// RationalComponent.defaultProps = {};

export default RationalComponent;
