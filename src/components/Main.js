/*eslint no-console: ["error", { allow: ["log", "warn", "error"] }] */

require('normalize.css/normalize.css');
require('styles/App.css');

import Rational from './Rational';
import Matrix from './Matrix';

import React from 'react';
import RationalComponent from './RationalComponent';
import MatrixComponent from './MatrixComponent';

class AppComponent extends React.Component {
    constructor() {
        super();
        this.state = { rat: new Rational(3,4), mat: new Matrix(3,3), matR: new Matrix(3,3) };
    }
    onClick() {
        let matR = this.state.matR.map((rat) => rat.add(1));
        console.log(matR.at(0,0));
        this.setState({ matR:matR });
    }
    render() {
        return (
            <div>
                <p>Rational test</p><br/><br/>
                <RationalComponent value={ this.state.matR.at(0,0) }/>
                <p>Matrix test</p>
                <MatrixComponent mat={ this.state.mat} />
                <p>Update matrix test</p>
                <MatrixComponent mat={ this.state.matR} />
                <p>Test here</p>
                <button onClick={this.onClick.bind(this)}>Test</button>
            </div>
        );
    }
}

AppComponent.defaultProps = {
};

export default AppComponent;
