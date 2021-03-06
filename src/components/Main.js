/*eslint no-console: ["error", { allow: ["log", "warn", "error"] }] */

require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import MatrixComponent from './MatrixComponent';

import Matrix from './Matrix';
import Rational from './Rational';

class AppComponent extends React.Component {
    constructor() {
        super();
        let p = [ [6,2,6, new Rational(7,2)], [new Rational(3,4), new Rational(3,4), 7, 8], [1, new Rational(1,2), new Rational(7,2), 1] ];
        let mat = new Matrix(3,4,p);
        let matR = mat.gaussJordan();
        this.state = { mat: mat, matR: matR };
    }
    onChange(i, j, rat) {
        if (rat) {
            let mat = Matrix.fromMatrixWithValueAt(this.state.mat, i, j, rat);
            let matR = mat.gaussJordan();
            this.setState({ mat: mat, matR: matR });
        }
    }
    render() {
        return (
            <div>
                <h2>Gauss Jordan</h2>
                <p>Select a cell, and type a rational number like "-5 1/3"</p>
                <MatrixComponent mat={ this.state.mat} onChange={this.onChange.bind(this)} />
                <p>Here&#39;s that matrix with Gauss-Jordan applied:</p>
                <MatrixComponent mat={ this.state.matR} />
            </div>
        );
    }
}

AppComponent.defaultProps = {
};

export default AppComponent;
