'use strict';
/*eslint no-console: ["error", { allow: ["log", "warn", "error"] }] */

import React from 'react';
import Rational from './Rational';

require('styles//RationalInput.css');

class RationalInputComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: props.value, literal: props.value.toString() };
    this.handleChange = this.handleChange.bind(this);
  }
  rationalize(p) {
    if (Array.isArray(p)) {
      if (p.length !== 3) return null;
      if (p[2] == ' ') {
        let fraction = this.rationalize(p[1]);
        if (!fraction || fraction.isWhole()) { return null; }
        if (fraction && !isNaN(p[0])) {
          let whole = new Rational(parseInt(p[0]));
          return (whole.sign() > 0)? whole.add(fraction) : whole.sub(fraction);
        }
      } else if (p[2] == '/') {
        if (!isNaN(p[0]) && !isNaN(p[1])) return new Rational(parseInt(p[0]), parseInt(p[1]));
        return null;
      }
    } else {
      p = p.trim();
      if (p.length === 0) return null;
      if (!isNaN(p)) return new Rational(parseInt(p));
      if (p.includes(' ')) return this.rationalize(p.split(' ').concat([' ']));
      else if (p.includes('/')) return this.rationalize(p.split('/').concat(['/']));
    }
    return null;
  }
  handleChange(event) {
    let newState = { literal: event.target.value };
    let newValue = this.rationalize(newState.literal);
    if (newValue) { newState.value = newValue; }
    this.setState(newState);
    this.props.onChange(newValue);
  }
  render() {
    return (
      <div>
        <input type="text" className="square-input" autoFocus value={this.state.literal} onChange={this.handleChange} />
      </div>
    );
  }
}

RationalInputComponent.displayName = 'RationalInputComponent';

// Uncomment properties you need
// RationalInputComponent.propTypes = {};
// RationalInputComponent.defaultProps = {};

export default RationalInputComponent;
