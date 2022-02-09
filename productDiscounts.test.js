const calculateProductTotal = require('./productDiscounts').calculateProductTotal
const expect = require('chai').expect

describe('calculateProductTotal', () => {

    const tests = [
        { products: [], scenario: 'Empty array returns 0', expected: 0},
        { products: ['A'], scenario: 'A single product costs 299', expected: 299},
        { products: ['A', 'A'], scenario: 'Two of the same product costs 299', expected: 598},
        { products: ['A', 'B'], scenario: 'Two unique products costs 598', expected: 598},
        { products: ['A', 'B', 'C'], scenario: 'Three unique products are discounted 10%', expected: 807.3},
        { products: ['A', 'B', 'C', 'D'], scenario: 'Four unique products are discounted 20%', expected: 956.8},
        { products: ['A', 'B', 'C', 'D', 'E'], scenario: 'Five unique products are discounted 25%', expected: 1121.25},
        { products: ['A', 'A', 'B', 'C'], scenario: 'You are only discounted for sets of products', expected: 1106.3},
        { products: ['A', 'A', 'B', 'C', 'A', 'B', 'C', 'D', 'E'], scenario: 'Set of 3, Set of 5, and a Single product', expected: 2227.55},
        { products: ['A', 'A', 'B', 'A', 'B', 'C', 'A', 'B', 'C', 'D', 'A', 'B', 'C', 'D', 'E'], scenario: 'One of every pricing scenario', expected: 3782.35}
    ]
    
    tests.forEach(({products, scenario, expected}) => {
        it(`${scenario}`, () => {
            expect(calculateProductTotal(products)).eql(expected)
        })
    })
})