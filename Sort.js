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

QuickSort2 = function(arr){
    partition(arr, 0, arr.length - 1);
}

partition = function(arr, start, end){
    if(start >= end) return;
    let key = arr[start];
    let l = start + 1;
    let r = end;
    while(l <= r){
        if(arr[l] > key && arr[r] < key){
            let tmp = arr[l];
            arr[l] = arr[r];
            arr[r] = tmp;
        }
        if(arr[l] <= key){
            l ++;
        }
        if(arr[r] > key){
            r --;
        }
    }
    let tmp = arr[start];
    arr[start] = arr[r];
    arr[r] = tmp;
    partition(arr, start, r - 1);
    partition(arr, r + 1, end);
}

MergeSort = function(arr){
    for(let size = 1; size < arr.length; size*=2){
        let i = 0;
        while((i*size + size) < arr.length){
            let left = i*size;
            let right = (i*size + size + size) >= arr.length ? arr.length - 1 : (i+2) * size - 1;
            merge(arr,left, left+size, right);
            i++;
        }
    }
    return arr;
};

merge = function(arr, left, mid, right){
    let leftArr = arr.slice(left,mid);
    let rightArr = arr.slice(mid,right + 1);
    leftArr.push(Infinity);
    rightArr.push(Infinity);
    let i = 0;
    let j = 0;
    for(let k = left; k <= right; k++){
        if(leftArr[i] < rightArr[j]){
            arr[k] = leftArr[i];
            i++;
        }else{
            arr[k] = rightArr[j];
            j++;
        }
    }
}

ShellSort = function(arr){
    let length = arr.length;
    let h = 1;
    while(h < length){
        h = h * 3 + 1;
    }
    h = (h - 1) / 3;
    while(h >= 1){
        for(let i = 0; i < h; i++){
            let current = i;
            
            while(current < length){
                let tmp = arr[current];
                let j = current - h;
                if(j < 0){
                    current += h;
                    continue;
                }
                while(j >= 0){
                    if(arr[j] >= tmp){
                        arr[j + h] = arr[j];
                        j = j - h;
                    }else{
                        break;
                    }
                }
                arr[j + h] = tmp;
                current = current + h;
            }
        }
        h = (h - 1)/3;
    }
};

// console.log(QuickSort([6,7,4,5,1]));