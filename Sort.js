/* jshint esversion: 6 */
// Simple Sort
BubbleSort = function(arr) {
    let tmp;
    for(let i = arr.length - 1; i > 0; i--){
        for(let j = 0; j < i; j++){
            if(arr[j] > arr[j+1]){
                tmp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = tmp;
            }
        }
    }
    return arr;
};

SelectSort = function(arr) {
    let tmp;
    for(let i = 0; i < arr.length - 1; i++){
        tmp = arr[i];
        tmp_index = i;
        for(let j = i + 1; j < arr.length; j++){
            if(tmp > arr[j]){
                tmp = arr[j];
                tmp_index = j;
            }
        }
        arr[tmp_index] = arr[i];
        arr[i] = tmp;
    }
    return arr;
};

InsertSort = function(arr){
    let tmp;
    for(let i = 1; i < arr.length; i++){
        tmp = arr[i];
        for(let j = i - 1; j > -1; j--){
            if(arr[j] > tmp){
                arr[j+1] = arr[j];
            }else{
                arr[j+1] = tmp;
                break; 
            }
        }
        if(tmp < arr[0]){
            arr[0] = tmp;
        }
    }
    return arr;
};

// Advance Sort
QuickSort = function(arr){
    if(arr.length === 1 || arr.length === 0) return arr;
    let key = arr[0];
    let i = 0;
    let j = arr.length;
    let tmp;
    while(i <= j){
        if(arr[i] > key && arr[j] <= key){
            tmp = arr[i];
            arr[i] = arr[j];
            arr[j] = tmp;
            i++;
            j--;
        }
        if(arr[i] <= key){
            i++;
        }
        if(arr[j] > key){
            j--;
        }
    } 
    return QuickSort(arr.slice(0,i-1)).concat(QuickSort(arr.slice(i-1,arr.length)));
};

MergeSort = function(){

};

HillSort = function(){

};

console.log(QuickSort([6,7,4,5,1]));