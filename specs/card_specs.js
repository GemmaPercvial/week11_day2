// import assert 
// import card class
// create describe block for testing class
// beforeEach

const assert = require('assert');
const Card = require('../card.js');

describe('Card', function(){
    
    let card;

    beforeEach(function(){
        card = new Card('Batman', 10, 5, 6);
    });

    it ('should have a name', function(){
        const actual = card.name;
        const expected = 'Batman';
        assert.strictEqual(actual, expected);
    });

    it ('should have an intelligence score', function(){
        const actual = card.intelligence;
        const expected = 10;
        assert.strictEqual(actual, expected);

    });

    it ('should have an strength score', function(){
        const actual = card.strength;
        const expected = 5;
        assert.strictEqual(actual, expected);
    });

    it ('should have an agility score', function(){
        const actual = card.agility;
        const expected = 6;
        assert.strictEqual(actual, expected);
    });
})