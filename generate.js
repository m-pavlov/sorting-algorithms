
function generate(size){
   var ret = [],
       i;

   for (i = 0; i < size; i++) {
       ret.push( Math.round( Math.random() * size ) );
   }

   return ret;
}

module.exports = generate;