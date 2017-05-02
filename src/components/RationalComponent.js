'use strict';

import React from 'react';

require('styles//Rational.css');

let RationalComponent = (props) => (
    <div className="rational-component">value: {props.value.speak()}</div>
);

RationalComponent.displayName = 'RationalComponent';

// Uncomment properties you need
// RationalComponent.propTypes = {};
// RationalComponent.defaultProps = {};

export default RationalComponent;
