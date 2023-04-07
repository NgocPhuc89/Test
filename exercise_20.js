function sumlargest_sum (array){
    let sum = 0 ;
    let max = 0 ;
    for ( let i = 0; i < array.length; i++){
        for ( let j = 0; j < array[i].length; j++){
            sum += array[i][j] ;
        }
        if (sum > max){
            max = sum ;
        }
        sum = 0 ;
    }   
    return max ;
}
console.log( sumlargest_sum ([[6, 3, 7, 9, 5],
                            [1, 9, 3, 5, 8]]));