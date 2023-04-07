function findNumber (array){
    for ( let i = 0; i < array.length; i++){
        for ( let j = 0; j < array[i].length; j ++){
            if (array[i][j] % 2 == 0){
                return array[i][j];
            }
        }
    }
}
console.log( findNumber ([[6, 3, 7, 9, 5],
                        [1, 9, 3, 5, 4]]));