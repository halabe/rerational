'use strict';

class Rational {
    constructor(num, den) {
        [this.num, this.den] = [num || 0, den || 1];
        this.reduce();
    }
    reduce() {
        let gcd = function(a, b) { return (b)? gcd(b,a%b) : a }
        let factor = gcd(this.num, this.den);
        this.num = this.num / factor;
        this.den = this.den / factor;
    }
    copy() {
        return new Rational(this.num, this.den);
    }
    ratify(rat) {
        return (typeof(rat) === 'number')? new Rational(rat) : rat;
    }
    add(rat) {
        rat = this.ratify(rat);
        let num = this.num * rat.den + rat.num *this.den;
        let den = this.den * rat.den;
        return new Rational(num, den);
    }
    sub(rat) {
        rat = this.ratify(rat);
        let num = this.num * rat.den - rat.num *this.den;
        let den = this.den * rat.den;
        return new Rational(num, den);
    }
    mlt(rat) {
        rat = this.ratify(rat);
        return new Rational(this.num*rat.num, this.den*rat.den);
    }
    div(rat) {
        rat = this.ratify(rat);
        return this.mlt(rat.inv());
    }
    neg() {
        return new Rational(-this.num, this.den);
    }
    inv() {
        return new Rational(this.den, this.num);
    }
    sign() {
        return Math.sign(this.num) * Math.sign(this.den);
    }
    abs() {
        return new Rational(Math.abs(this.num), Math.abs(this.den));
    }
    eq(rat) {
        rat = this.ratify(rat);
        return this.sub(rat).num === 0;
    }
    eqZero() {
        return this.num === 0;
    }
    gt(rat) {
        return this.sub(rat).num > 0;
    }
    isWhole() {
        return this.den === 1;
    }
    lt(rat) {
        return this.sub(rat).num < 0;
    }
}
export default Rational;
