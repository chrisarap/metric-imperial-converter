function ConvertHandler() {

  const units = {
    mi: 'miles',
    km: 'kilometers',
    gal: 'gallons',
    l: 'liters',
    L: 'liters',
    lbs: 'pounds',
    kg: 'kilograms'
  }

  this.getNum = input => {
    if ((/\s/).test(input)) {
      return 'invalid number';
    } else if(units.hasOwnProperty(input.toLowerCase())) {
      return 1;
    } else {
      return eval(input.match(/\d*[./]?\d*/g).join(''));
    }
  };

  this.getUnit = input =>{
    if ((/\s/).test(input)) {
      return 'invalid unit';
    }else if(input.toLowerCase().match(/[a-zA-Z]+/g).join('') == 'l') {
      return 'L';
    } else {
      return input.toLowerCase().match(/[a-zA-Z]/g).join('');
    }
   };

  this.getReturnUnit = initUnit => {
    if (initUnit == 'mi') return 'km';
    if (initUnit == 'km') return 'mi';

    if (initUnit == 'lbs') return 'kg';
    if (initUnit == 'kg') return 'lbs';

    if (initUnit == 'gal') return 'L';
    if (initUnit == 'l' || initUnit == 'L') return 'gal';
  };

  this.spellOutUnit = function(unit) {
    let result;

    return result;
  };

  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;

    if (initUnit == 'gal')  return Math.round(initNum * galToL * 100000) / 100000;
    if (initUnit == 'l' || initUnit == 'L')    return Math.round(initNum / galToL * 100000) / 100000;

    if (initUnit == 'lbs')  return Math.round(initNum * lbsToKg * 100000) / 100000;
    if (initUnit == 'kg')  return Math.round(initNum / lbsToKg * 100000) / 100000;

    if (initUnit == 'mi')  return Math.round(initNum * miToKm * 100000) / 100000;
    if (initUnit == 'km')  return Math.round(initNum / miToKm * 100000) / 100000;
  };

  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    return `${initNum} ${units[initUnit]} converts to ${returnNum} ${units[returnUnit]}`;
  };
}

module.exports = ConvertHandler;
