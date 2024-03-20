let arr1 = [3];
let arr2 = [-2,-1];

function findMedianSortedArrays(arr1, arr2) {
    // let newArr = arr1.concat(arr2).sort();
    let newArr = arr1.concat(arr2);
    let t, i, j;
    for (j = 0; j <= newArr.length - 2; j++)
    {
        for (i = 0; i <= newArr.length - 2; i++)
        {
            if (newArr[i] > newArr[i+1]){
                t = newArr[i+1];
                newArr[i+1] = newArr[i];
                newArr[i] = t;
            }
        }
    }
    let mid = parseInt((newArr.length - 1) / 2);
    let ans = 0;
    if(newArr.length % 2 == 0){
        ans = newArr[mid] + newArr[mid + 1];
        return parseFloat(ans / 2).toFixed(5);
    }else{
        ans = newArr[mid];
        return parseFloat(ans).toFixed(5);
    }
}

let a = findMedianSortedArrays(arr1, arr2);
console.log(a);