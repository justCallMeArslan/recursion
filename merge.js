export function mergeSort(array, start, end) {
    if (start === undefined) {
        start = 0;
    };
    if (end === undefined) {
        end = array.length - 1;
    };
    if (!Array.isArray(array)) {
        return array;
    };

    if (start >= end) {
        return array;
    };
    const mid = Math.floor((start + end) / 2);

    mergeSort(array, start, mid); // splits left part recursevely
    mergeSort(array, mid + 1, end); // splits right part recursevely


    merge(array, start, mid, end);

    return array;
}

function merge(array, start, mid, end) {
    let temp = []; // temp array for storing merged

    let i = start; // for values for left part
    let j = mid + 1; // for values for right part 

    while (i <= mid && j <= end) { // from start to end of their part (left and right parts)
        // but important note that && is condition , so both part shoud be present at the time, 
        // so array.length assumed to be even 
        if (array[i] <= array[j]) {
            temp.push(array[i]);
            i++;
        } else {
            temp.push(array[j]);
            j++;
        }
    }

    while (i <= mid) { // if array is not even and left part was bigger
        temp.push(array[i]);
        i++;
    }

    while (j <= end) { // if array is not even and right part was bigger
        temp.push(array[j]);
        j++;
    }

    for (let k = 0; k < temp.length; k++) { // merged in temp items copied/passed 
        // back to original array
        array[start + k] = temp[k];
    }
}

