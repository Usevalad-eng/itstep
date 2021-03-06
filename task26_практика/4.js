function fillArray(a, n){

    const min = 1, max = 100;

    for(let i = 0; i < n; i++){
        a[i] = Math.floor(Math.random() * (max - min + 1)) + min;
    }

    return a;
}

//линейный поиск 
/*function maxFromMassive(a){

let n = a.length;
let max = a[0];
for (let i = 1; i < n; i++){
    
    if (a[i] > max) {
    max = a[i];
    }
    
}
return max;
}*/


function indexOfMax(arr) {
    if (arr.length === 0) {
        return -1;
    }

    let max = arr[0];
    let maxIndex = 0;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            maxIndex = i;
            max = arr[i];
        }
    }

    return maxIndex;
}

/*function linearSearch(value, list) {
    let found = false;
    let position = -1;
    let index = 0;
 
    while(!found && index < list.length) {
        if(list[index] == value) {
            found = true;
            position = index;
        } else {
            index += 1;
        }
    }
    return position;
}*/

let b = [];
b = fillArray(b, 10);
console.log(b);

let maxIndex = indexOfMax(b);
console.log(maxIndex);

/*let position = linearSearch(maxIndex,b);
console.log(position);*/