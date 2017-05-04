/*eslint no-console: ["error", { allow: ["log", "warn", "error"] }] */

require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import MatrixComponent from './MatrixComponent';

import Matrix from './Matrix';

class AppComponent extends React.Component {
    constructor() {
        super();
        let p = [ [1, 2, 8, -7], [2, -2, 4, 0], [-3, 4, -2, -5] ];
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
                <p>Here&#39;s a Matrix</p>
                <MatrixComponent mat={ this.state.mat} onChange={this.onChange.bind(this)} />
                <p>Here it is with Gauss-Jordan applied:</p>
                <MatrixComponent mat={ this.state.matR} />
            </div>
        );
    }
}

AppComponent.defaultProps = {
};

export default AppComponent;
