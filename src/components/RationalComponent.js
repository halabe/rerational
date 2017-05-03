'use strict';
/*eslint no-console: ["error", { allow: ["log", "warn", "error"] }] */

import React from 'react';

require('styles/Rational.css');

let RationalComponent = (props) => {
    let c = props.value.stringComponents();
    let wholeJsx = <span>{c.sign}{c.whole}</span>
    let fractJsx = (c.frac)? <span><sup><small>{c.num}</small></sup>&frasl;<sub><small>{c.den}</small></sub></span> : null
    return <span className="square" onClick={props.onClick} >{wholeJsx} {fractJsx}</span>;
};

RationalComponent.displayName = 'RationalComponent';

// Uncomment properties you need
// RationalComponent.propTypes = {};
// RationalComponent.defaultProps = {};

export default RationalComponent;
