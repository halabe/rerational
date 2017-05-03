'use strict';
/*eslint no-console: ["error", { allow: ["log", "warn", "error"] }] */

require('styles/Matrix.css');

import React from 'react';
import RationalComponent from './RationalComponent';


class MatrixComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { mat: props.mat, focus: [-1,-1] };
  }
  onClick(i, j) {
    //console.log([i,j]);
    this.setState({ focus:[i,j] });
  }
  hasFocus(i,j) {
    return this.state.focus[0]===i && this.state.focus[1]===j;
  }
  renderStatic(i,j,v) {
    return (<div key={j} ><RationalComponent value={v} onClick={this.onClick.bind(this, i, j)} /></div>);
  }
  render() {
    const rows = this.state.mat.rows.map((rv,i) => {
        let cols = rv.v.map((v,j) => this.renderStatic(i,j,v));
        return <div className='row' key={i} >{cols}</div>
    });
    return (
        <div>{rows}</div>
    );
  }
}

MatrixComponent.displayName = 'MatrixComponent';

export default MatrixComponent;
