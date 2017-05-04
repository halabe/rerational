'use strict';
/*eslint no-console: ["error", { allow: ["log", "warn", "error"] }] */

require('styles/Matrix.css');

import React from 'react';
import Matrix from './Matrix';
import RationalComponent from './RationalComponent';
import RationalInputComponent from './RationalInputComponent';


class MatrixComponent extends React.Component {
  constructor() {
    super();
    this.state = { focus: [-1,-1] };
  }
  onClick(i, j) {
    this.setState({ focus:[i,j] });
  }
  onChange(i, j, newValue) {
      if (newValue) {
          let m = Matrix.fromMatrixWithValueAt(this.props.mat, i, j, newValue);
          console.log(m);
      } else {
          console.log('null');
      }
  }
  hasFocus(i,j) {
    return this.state.focus[0]===i && this.state.focus[1]===j;
  }
  renderStatic(i,j,v) {
      return (<div key={j}><RationalComponent value={v} onClick={this.onClick.bind(this, i, j)} /></div>);
  }
  renderEditable(i,j,v) {
      return (<div key={j}><RationalInputComponent
                value={v}
                onClick={this.onClick.bind(this, i, j)}
                onChange={(newValue) => this.onChange(i, j, newValue)} /></div>);
  }
  render() {
      const editable = true;//this.props.onChange !== undefined;
      const rows = this.props.mat.rows.map((rv,i) => {
          let cols = rv.v.map((v,j) => (this.hasFocus(i,j) && editable)? this.renderEditable(i,j,v) : this.renderStatic(i,j,v));
          return <div className='row' key={i} >{cols}</div>
      });
      return (<div>{rows}</div>);
  }
}

MatrixComponent.displayName = 'MatrixComponent';

export default MatrixComponent;
