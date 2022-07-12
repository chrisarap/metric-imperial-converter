const chai = require('chai');
let assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');

let convertHandler = new ConvertHandler();

suite('Unit Tests', function(){
  test('Testing whole number input', ()=> {
    assert.strictEqual(convertHandler.getNum('5mi'), 5, "whole number read correctly");
    assert.strictEqual(convertHandler.getNum('8gal'), 8, "whole number read correctly");
    assert.strictEqual(convertHandler.getNum('12l'), 12, "whole number read correctly");
  });
});
