function sort(data){
    var l = data.length,
        i, j, min, min_index, tmp;

    for (i = 0; i < l; i++) {
        min = data[i],
        min_index = i;

        for (j = i; j < l; j++) {
            if ( data[j] < min ) {
                min = data[j];
                min_index = j;
            }
        }

        tmp = data[i];
        data[i] = data[min_index];
        data[min_index] = tmp;
    }     

    return data;
}

module.exports = sort;