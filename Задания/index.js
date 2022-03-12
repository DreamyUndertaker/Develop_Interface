function getRandomInt(min, max){
    return Math.floor(Math.random() * (max - min)) + min;
}

function matrixArray(rows,columns){
    var arr = new Array();
    for(var i=0; i<rows; i++){
        arr[i] = new Array();

        for(var j=0; j<columns; j++){
            arr[i][j] = getRandomInt(-900, 900);
        }
    }
    return arr;
}

const N = 8
var myMatrix = matrixArray(N,N);

console.log(myMatrix);

let i = 0;
let j = 0;
let pos = 0;
let permutations = 0;

while (pos < N*N - 1) {
   if (!findAndReplace(myMatrix, i, j)) {
    j++;
    pos++;
    
    if (j == N) {
         j = 0;
         i++;
    } 
   }   
}

function findAndReplace(array, i, j) {
    let l = j + 1;
    for (let k = i; k < N; k++) {
        while (l < N) {
            if (array[k][l] > array[i][j]) {
                const temp = array[k][l];
                array[k][l] = array[i][j];
                array[i][j] = temp; 
                permutations ++;
                return true;
            }
            l++;
        }

        l = 0;
    }
    return false;
}

console.log(myMatrix);
console.log(`\n\nPermutations: ${permutations}`);