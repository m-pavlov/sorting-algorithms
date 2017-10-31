function sort(data){
    var len = data.length,
        i = 0, tmp;
        
    while (i < len) {
        if (i === 0 || data[i - 1] <= data[i]) {
            i++;
        } else {
            tmp = data[i];
            data[i] = data[i - 1];
            data[i - 1] = tmp;
            // [data[i], data[i - 1]] = [data[i - 1], data[i]]; //~2 times slower
            i--;
        }
    }

    return data;
}

module.exports = sort;