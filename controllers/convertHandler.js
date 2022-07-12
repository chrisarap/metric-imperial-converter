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
    let rgx = /[a-zA-Z]/;
    let index = input.split('').findIndex((x, index) => rgx.test(x));
    let number = input.slice(0, index);

    console.log(number);
    if (/\s/.test(number)) {
      return 'invalid number';
    } else {
      try {
        if(number.length == 0) return 1;
        if((/\d+\/\d+[\.]?\d+\/\d+/).test(number)) return 'invalid number';
        return eval(number);
      } catch (e) {
        return 'invalid number';
      }
    }
  };

  this.getUnit = input =>{
    let rgx = /[a-zA-Z]/;
    let index = input.split('').findIndex((x, index) => rgx.test(x));
    let unit = (input.slice(index, input.length) == 'L' || input.slice(index, input.length) == 'l') ? 'L' : input.toLowerCase().slice(index, input.length);

    if(!units.hasOwnProperty(unit)) {
      return "invalid unit"
    } else {
      return unit;
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

    if (initUnit == 'gal') return Math.round(initNum * galToL * 100000) / 100000;
    if (initUnit == 'l' || initUnit == 'L') return Math.round(initNum / galToL * 100000) / 100000;

    if (initUnit == 'lbs') return Math.round(initNum * lbsToKg * 100000) / 100000;
    if (initUnit == 'kg')  return Math.round(initNum / lbsToKg * 100000) / 100000;

    if (initUnit == 'mi')  return Math.round(initNum * miToKm * 100000) / 100000;
    if (initUnit == 'km')  return Math.round(initNum / miToKm * 100000) / 100000;
  };

  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    return `${initNum} ${units[initUnit]} converts to ${returnNum} ${units[returnUnit]}`;
  };
}

module.exports = ConvertHandler;
