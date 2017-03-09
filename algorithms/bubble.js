function sort(data){
    var l = data.length - 1,
        i, tmp, need_to_continue;
        
    do {
        need_to_continue = false;

        for (i = 0; i < l; i++) {
            if ( data[i] > data[i + 1] ) {
                tmp         = data[i];
                data[i]     = data[i + 1];
                data[i + 1] = tmp;
                
                need_to_continue = true;
            }
        }
    } while (need_to_continue);

    return data;
}

module.exports = sort;