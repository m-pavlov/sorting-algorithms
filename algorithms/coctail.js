function sort(data){
    var left = 0,
        right = data.length - 1,
        i, tmp;

    do {
        for (i = left; i < right; i++) {
            if ( data[i] > data[i + 1] ) {
                tmp = data[i];
                data[i] = data[i + 1];
                data[i + 1] = tmp;
            }
        }
        right--;
        for (i = right; i > left; i--) {
            if ( data[i] < data[i - 1] ) {
                tmp = data[i];
                data[i] = data[i - 1];
                data[i - 1] = tmp;
            }            
        }
        left++;
    } while ( left <= right );

    return data;
}

module.exports = sort;