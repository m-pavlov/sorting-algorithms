function sort(data){
    
    quicksort(0, data.length - 1);
    
    function quicksort(low, high) {
        if (low < high) {
            let p = partition(low, high);

            quicksort(low, p - 1);
            quicksort(p, high);
        }
    }
    
    function partition(low, high) {
        let pivot = getPivot(low, high),
            i = low,
            j = high;
    
        while (i <= j) {
            while (data[i] < pivot) { 
                i++; 
            }
            
            while (data[j] > pivot) { 
                j--;
            }
    
            if (i <= j) {
                swap(i, j);
                i++;
                j--;
            }
        }

        return i;
    }
    
    function swap(i, j) {
        let tmp = data[i];

        data[i] = data[j];
        data[j] = tmp;
    }
    
    function getPivot(low, high) {
        let index = low + parseInt( (high - low) / 2 );

        return data[index];
    }

    return data;
}

module.exports = sort;