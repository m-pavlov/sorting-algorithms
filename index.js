const sort = require('./sort');
const generate = require('./generate');

var data = generate(100 * 1000);
// var data = generate(10);

function go(type, index){
    setTimeout(()=> {
        sort.sort(type, data.slice());
    }, index * 1000);
}

console.log('Array length: ' + (data.length / 1000) + 'K');

Object.keys(sort.types).forEach( (type, index) => {
    go(type, index);
});
