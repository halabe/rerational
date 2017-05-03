'use strict';

let _ = require('underscore');

import Rational from './Rational';

class RationalVector {
    // if p is an integer, create a p-dimensional vector of Rational(0)
    // if p is an array of ints, create a vector of those ints mapped to Rationals
    // if p is an array of Rationals, create a vector of those Rationals copied
    constructor(p) {
        this.v = (typeof(p) === 'number')? new Array(p).fill(0) : ((Array.isArray(p))? p : p.v);
        this.v = this.v.map((x) => (x instanceof Rational)? x.copy() : new Rational(x));
    }
    copy() {
        return new RationalVector(this.v);
    }
    map(f) {
        return new RationalVector(this.v.map(f));
    }
    normalized() {
        let j = this.pivot();
        return (j>=0)? this.mlt(this.at(j).inv()) : this.copy();
    }
    at(j) {
        return this.v[j];
    }
    pivot() {
        return _.findIndex(this.v, (rat) => !rat.eqZero());
    }
    zerodWith(rv) {
        let j = rv.pivot();
        return (j>=0)? this.add(rv.mlt(this.at(j).neg())) : this.copy();
    }
    add(param) {
        let v = _.map(this.v, (el, j) => el.add(param.at(j)));
        return new RationalVector(v);
    }
    mlt(param) {
        let paramJ = (param instanceof RationalVector)? ((j)=>param.at(j)) : (()=>param);
        let v = _.map(this.v, (el, j) => el.mlt(paramJ(j)));
        return new RationalVector(v);
    }
}
export default RationalVector;
