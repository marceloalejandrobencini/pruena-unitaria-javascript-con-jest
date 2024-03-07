

function fromDollarToYen(dollars) {

    const yen = dollars * 109.88;
    return yen;
  }
  
  function fromEuroToDollar(euros) {
    const dollars = euros * 1.07;
    return dollars;
  }
  
  function fromYanToPound(yen) {
    const pounds = yen * 0.0065;
    return pounds;
  }
  
  module.exports = {
    fromDollarToYen,
    fromEuroToDollar,
    fromYanToPound,
  };
  