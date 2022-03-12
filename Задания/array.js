function getRandomInt(min, max){//генераци случайного числа
    return Math.floor(Math.random() * (max - min)) + min;
}

function matrixArray(rows,columns){ //создаёт двумерный массив
    var arr = new Array();
    for(var i=0; i<rows; i++){
    arr[i] = new Array();

        for(var j=0; j<columns; j++){
            arr[i][j] = getRandomInt(-32, 32);
        }
    }
    return arr;
}

function compareNumbers(a, b) {//по какому принципу сортировать 
    return a - b;
}
function transpose(array){
    return array[0].map((_, colIndex) => array.map(row => row[colIndex]));
}

var myMatrix = matrixArray(8,8);
myMatrix.forEach(row => (row.sort(compareNumbers)));

console.log(myMatrix);