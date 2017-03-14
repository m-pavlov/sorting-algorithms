const sort = require('./sort');
const generate = require('./generate');

var data = generate(100 * 1000);
// var data = generate(30);

function go(type){
    sort(type, data.slice());
}

console.log('Array length: ' + (data.length / 1000) + 'K');

go('standart');
go('bubble');
go('selection');
go('coctail');
go('insertion');

