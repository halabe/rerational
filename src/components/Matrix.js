'use strict';

let _ = require('underscore');
import RationalVector from './RationalVector';

class Matrix {
    // r,c are matrix dimensions
    // if p is undefined, create a rxc-dimensional Matrix of Rational(0)
    // if p is a 2D array of ints, create a Matrix of those ints mapped to Rationals
    // if p is a 2D array of Rationals, create a Matrix of those Rationals copied
    // if p is an array of RationalVectors, create a Matrix from those
    constructor(r,c,p) {
        this.checkArguments(r,c,p);
        if (!p) {
            p = new Array(r);
            for (var i=0; i<r; i++) p[i] = new Array(c).fill(0);
        }
        this.r = r;
        this.c = c;
        this.rows = p.map((x) => new RationalVector(x));
    }
    checkArguments(r,c,p) {
        if (r < 1 || c < 1) throw 'Matrix error: invalid dimensions';
        if (p) {
            if (!Array.isArray(p) || p.length!==r)
                throw 'Matrix error: param must be a array with dimension r';
            if (_.every(p, (x) => Array.isArray(x)) && _.some(p, (x) => x.length !==c))
                throw 'Matrix error: array param must contain arrays with dimension c';
        }
    }
    copy() {
        return new Matrix(this.r, this.c, this.rows.map((rv) => rv.v));
    }
    map(f) {
        return new Matrix(this.r, this.c, this.rows.map((rv) => rv.map(f)));
    }
    at(i,j) {
        return this.rows[i].at(j);
    }
    gaussJordan() {
        let sortedRows = _.sortBy(this.rows, (row) => {
            let pivot = row.pivot();
            return (pivot >= 0)? pivot : Infinity;
        });
        let rows = _.map(sortedRows, (row, i) => {
            let normalized = row.normalized();
            for (var bi=i+1; bi<this.rows.length; bi++) {
                sortedRows[bi] = sortedRows[bi].zerodWith(normalized);
            }
            return normalized;
        });
        return new Matrix(this.r, this.c, rows);
    }
}
export default Matrix;
