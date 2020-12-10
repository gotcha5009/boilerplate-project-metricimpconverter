/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  const extract = function (input) {
    try {
      const regex = /\D{1,}$/i;
      const match = input.match(regex);
      let unit;
      if (match != null) {
        unit = match[0];
      } else {
        unit = 'invalid';
      }
      const num = input.replace(regex, "");

      return { num, unit };
    } catch (e) {

    }
  }

  this.getNum = function (input) {
    let result;
    try {
      const regex = /^[0-9]+[.]?[0-9]*([\/][0-9]+[.]?[0-9]*){0,1}$/g;
      const data = extract(input);
      console.log(data);
      //console.log(regex.test(data.num));
      regex.test(data.num)
        ? Boolean(Number(eval(data.num)))
          ? result = Number(eval(data.num))
          : result = 'invalid'
        : data.num == ''
          ? result = 1
          : result = 'invalid'
      return result;
    } catch (err) {
      throw err;
    }
  };

  this.getUnit = function (input) {
    let result;
    try {
      const data = extract(input);
      const unit = data.unit.toLowerCase();
      //console.log(!['gal', 'l', 'lbs', 'kg', 'mi', 'km'].includes(data.unit));
      !['gal', 'l', 'lbs', 'kg', 'mi', 'km'].includes(unit)
        ? result = 'invalid'
        : unit == 'l'
          ? result = 'L'
          : result = unit;
      return result;
    } catch (err) {
      throw err;
    }
  };

  this.getReturnUnit = function (initUnit) {
    let result;
    switch (initUnit) {
      case "gal":
        result = "L";
        break;
      case "L":
      case "l":
        result = "gal";
        break;
      case "km":
        result = "mi";
        break;
      case "mi":
        result = "km";
        break;
      case "kg":
        result = "lbs";
        break;
      case "lbs":
        result = "kg";
        break;
    }

    return result;
  };

  this.spellOutUnit = function (unit) {
    let result;
    switch (unit) {
      case "gal":
        result = "gallons";
        break;
      case "l":
      case "L":
        result = "liters";
        break;
      case "km":
        result = "kilometers";
        break;
      case "mi":
        result = "miles";
        break;
      case "kg":
        result = "kilograms";
        break;
      case "lbs":
        result = "pounds";
        break;
    }
    return result;
  };

  this.convert = function (initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result;
    switch (initUnit) {
      case "gal":
        result = initNum * galToL;
        break;
      case "L":
        result = initNum / galToL;
        break;
      case "km":
        result = initNum / miToKm;
        break;
      case "mi":
        result = initNum * miToKm;
        break;
      case "kg":
        result = initNum / lbsToKg;
        break;
      case "lbs":
        result = initNum * lbsToKg;
        break;
    }

    return Number(result.toFixed(5));
  };

  this.getString = function (initNum, initUnit, returnNum, returnUnit) {
    let result;
    let unit;
    let convertedUnit;
    let returnSpellUnit = this.spellOutUnit(returnUnit);
    let initSpellUnit = this.spellOutUnit(initUnit);

    result = `${initNum} ${initSpellUnit} converts to ${returnNum} ${returnSpellUnit}`

    return result;
  };

}

module.exports = ConvertHandler;
