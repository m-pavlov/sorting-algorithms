const sort = require('./sort');
const generate = require('./generate');

var data = generate(10 * 1000);
// var data = generate(30);

console.log('Array length: ' + data.length);

sort('standart', data.slice());
sort('bubble', data.slice());
sort('selection', data.slice());