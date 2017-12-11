let chai = require('chai')
let expect = chai.expect

let calc = require('../app.js')

describe('a calculator', function() {
  it('can add two numbers', function() {
    expect(calc.add(2,4)).to.equal(6)
    expect(calc.add(10,4)).to.equal(14)
  })
  it('can subtract two numbers', function() {
    expect(calc.sub(10,2)).to.equal(8)
    expect(calc.sub(0,2)).to.equal(-2)
  })
})
