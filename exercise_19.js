function findMax (array){
    let max = 0 ;
    for ( let i = 0; i < array.length; i++){
        for ( let j = 0; j < array[i].length; j++){
            if ( array[i][j] % 2 == 0 && array[i][j] > max){          
             max = array[i][j] ;             
            }
        }
    }
    return max ;
}
console.log( findMax ([[6, 3, 7, 9, 5],
                        [1, 9, 3, 5, 8]]));