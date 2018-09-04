//
// should have empty hand
// add card to hand
//

const assert = require('assert');
const Player = require('../player.js');
const Card = require('../card.js');

describe('Player', function(){
    let player;
    let card;

    beforeEach(function(){
        player = new Player ("Euan")
        card = new Card('Batman', 10, 5, 6);
    });

    it ('should have name', function(){
        const actual = player.name;
        const expected = 'Euan';
        assert.strictEqual(actual, expected);
    });

    it('should have empty hand', function(){
        const actual = player.hand.length;
        assert.strictEqual(actual, 0);
    })

    it('should add a card', function(){
        player.addCard(card);
        const actual = player.hand.length;
        assert.strictEqual(actual, 1);
    })
})