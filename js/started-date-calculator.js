const fromDate = new Date('2020-01-01 GMT+01:00');
const currentDate = new Date();
const oneDay = 24 * 60 * 60 * 1000;
const dayCounter = Math.round(Math.abs((fromDate - currentDate) / oneDay));

document.getElementById('date-counter').innerHTML = dayCounter;

console.log(dayCounter + ' napja igyekszem tanulni a JavaScriptet! :)');
