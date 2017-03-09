function sort(data){
    return data.sort(function(a, b){
        if (a < b) return -1;
        else if (a > b) return 1;
        else return 0;
    });
}

module.exports = sort;