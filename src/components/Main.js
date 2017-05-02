/*eslint no-console: ["error", { allow: ["log", "warn", "error"] }] */

require('normalize.css/normalize.css');
require('styles/App.css');

import Rational from './Rational';


import React from 'react';
import RationalComponent from './RationalComponent';

let yeomanImage = require('../images/yeoman.png');

class AppComponent extends React.Component {
    render() {
        let r = new Rational();
        console.log(r);
        
        return (
            <div className="index">
                <img src={yeomanImage} alt="Yeoman Generator" />
                <div className="notice">Please edit <code>src/components/Main.js</code> to get started!</div>
                <RationalComponent value={ r }/>
            </div>
        );
    }
}

AppComponent.defaultProps = {
};

export default AppComponent;
