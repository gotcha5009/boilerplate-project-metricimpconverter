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
      const data = extract(input);
      console.log(data);
      // console.log(Number(data.num));
      const num = Number(data.num);
      Boolean(num)
        ? result = num
        : data.num == ''
          ? result = 1
          : result = 'invalid';
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
    switch (initUnit) {
      case "gal":
        unit = "gallons";
        convertedUnit = "liters";
        break;
      case "L":
        unit = "liters";
        convertedUnit = "gallons";
        break;
      case "km":
        unit = "kilometers";
        convertedUnit = "miles";
        break;
      case "mi":
        unit = "miles";
        convertedUnit = "kilometers";
        break;
      case "kg":
        unit = "kilograms";
        convertedUnit = "pounds";
        break;
      case "lbs":
        unit = "pounds";
        convertedUnit = "kilograms";
        break;
    }


    result = `${initNum} ${unit} converts to ${returnNum} ${convertedUnit}`

    return result;
  };

}

module.exports = ConvertHandler;
