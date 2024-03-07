// Importa las funciones que quieres probar
const { fromDollarToYen, fromEuroToDollar, fromYanToPound } = require('./app.js');

// Prueba para convertir $1 a yenes
test('1 USD should be 109.88 JPY', () => {
  const dollars = 1;
  const expectedYen = 109.88;
  const result = fromDollarToYen(dollars);
  expect(result).toBe(expectedYen);
});

// Prueba para convertir $20 a yenes
test('20 USD should be 2197.6 JPY', () => {
  const dollars = 20;
  const expectedYen = 2197.6;
  const result = fromDollarToYen(dollars);
  expect(result).toBe(expectedYen);
});
