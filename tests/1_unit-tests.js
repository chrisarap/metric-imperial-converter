const chai = require('chai');
let assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');

let convertHandler = new ConvertHandler();

suite('Unit Tests', function(){
  test('Testing whole number input', () => {
    assert.strictEqual(convertHandler.getNum('5mi'), 5, "whole number read correctly");
  });

  test('Testing decimal number input', () => {
    assert.strictEqual(convertHandler.getNum('3.5mi'), 3.5, "decimal number read correctly");
  });

  test('Testing fractional number input', () => {
    assert.strictEqual(convertHandler.getNum('3/5mi'), 0.6, "fractional number read correctly");
  });

  test('Testing fractional with decimal number input', () => {
    assert.strictEqual(convertHandler.getNum('3.5/2.5mi'), 1.4, "fractional number with decimals read correctly");
  });

  test('Testing double fraction input', () => {
    assert.strictEqual(convertHandler.getNum('3/20/3mi'), "invalid number", "return an error on a double-fraction");
  });

  test('Testing defaul number input', () => {
    assert.strictEqual(convertHandler.getNum('mi'), 1, "return default number 1");
  });

  test('testing each unit', () => {
    assert.strictEqual(convertHandler.getUnit('2gal'), 'gal', 'correctly read gal');
    assert.strictEqual(convertHandler.getUnit('2L'), 'L', 'correctly read L');
    assert.strictEqual(convertHandler.getUnit('2l'), 'L', 'correctly read l');
    assert.strictEqual(convertHandler.getUnit('2mi'), 'mi', 'correctly read mi');
    assert.strictEqual(convertHandler.getUnit('2km'), 'km', 'correctly read km');
    assert.strictEqual(convertHandler.getUnit('2lbs'), 'lbs', 'correctly read lbs');
    assert.strictEqual(convertHandler.getUnit('2kg'), 'kg', 'correctly read kg');
  });

  test('testing invalid unit', () => {
    assert.strictEqual(convertHandler.getUnit('ga l'), "invalid unit", "return default number 1");
  });

  test('testing return unit for each valid input unit', () => {
    assert.strictEqual(convertHandler.getReturnUnit('km'), "mi", "correctly km return mi");
    assert.strictEqual(convertHandler.getReturnUnit('mi'), "km", "correctly mi return km");
    assert.strictEqual(convertHandler.getReturnUnit('lbs'), "kg", "correctly lbs return kg");
    assert.strictEqual(convertHandler.getReturnUnit('kg'), "lbs", "correctly kg return lbs");
    assert.strictEqual(convertHandler.getReturnUnit('L'), "gal", "correctly L return gal");
    assert.strictEqual(convertHandler.getReturnUnit('gal'), "L", "correctly gal return L");
  });

  test('testing spell out unit', () => {
    assert.strictEqual(convertHandler.getUnit('GAL'), 'gal', 'correctly return gal');
    assert.strictEqual(convertHandler.getUnit('l'), 'L', 'correctly return L');
    assert.strictEqual(convertHandler.getUnit('MI'), 'mi', 'correctly return mi');
    assert.strictEqual(convertHandler.getUnit('KM'), 'km', 'correctly return km');
    assert.strictEqual(convertHandler.getUnit('LBS'), 'lbs', 'correctly return lbs');
    assert.strictEqual(convertHandler.getUnit('KG'), 'kg', 'correctly return kg');
  });

  test('convert gal to l', () => {
    assert.strictEqual(convertHandler.convert(1, "gal"), 3.78541, "correctly convert gal to l");
  });

  test('convert l to gal', () => {
    assert.strictEqual(convertHandler.convert(1, "l"), 0.26417, "correctly convert l to gal");
  });

  test('convert mi to km', () => {
    assert.strictEqual(convertHandler.convert(1, "mi"), 1.60934, "correctly convert mi to km");
  });

  test('convert km to mi', () => {
    assert.strictEqual(convertHandler.convert(1, "km"), 0.62137, "correctly convert km to mi");
  });

  test('convert lbs to kg', () => {
    assert.strictEqual(convertHandler.convert(1, "lbs"), 0.45359, "correctly convert lbs to kg");
  });

  test('convert kg to lbs', () => {
    assert.strictEqual(convertHandler.convert(1, "kg"), 2.20462, "correctly convert kg to lbs");
  });

});
