'use strict';

const expect = require('chai').expect;
const ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {

  let convertHandler = new ConvertHandler();

  app.route('/api/convert').get((req, res) => {
    const input = req.query.input;

    const initNum = convertHandler.getNum(input);
    let initUnit = convertHandler.getUnit(input);

    const returnNum = convertHandler.convert(initNum, initUnit);
    const returnUnit = convertHandler.getReturnUnit(initUnit);
    const string = convertHandler.getString(initNum, initUnit, returnNum, returnUnit);

    console.log(initNum, initUnit);

    if (initNum == 'invalid number' && initUnit == 'invalid unit') {
      res.send('invalid number and unit');
    } else if (initNum == 'invalid number') {
      res.send('invalid number');
    } else if (initUnit == 'invalid unit') {
      res.send('invalid unit');
    } else {
      /*
      if (initUnit == 'l') {
        initUnit = 'L';
      }
      */
      res.json({
        initNum: initNum,
        initUnit: initUnit,
        returnNum: returnNum,
        returnUnit: returnUnit,
        string: string
      });
    }
  });

};
