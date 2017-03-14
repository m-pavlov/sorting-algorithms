function sort(data){
    var l = data.length,
        i, tmp_index, current_value;

    for (i = 1; i < l; i++) {
        current_value = data[i];
        tmp_index = i;

        while (tmp_index > 0 && data[tmp_index - 1] > current_value) {
            data[tmp_index] = data[tmp_index - 1];
            tmp_index--;
        }
        data[tmp_index] = current_value;
    }

    return data;
}

module.exports = sort;