function list (array){
    let count = 0 ;
    for ( let i = 0; i < array.length; i++){
        for ( let j = 0; j < array[i].length; j++){
            if (array[i][j] < array[i][j + 1]){
                count ++ ;
            }
        } 
        if ( count == 0){
            return "dòng " + i + " giảm dần";
        }
        count = 0 ;     
    }
}
console.log( list ([[1, 5, 4, 3, 2],
                    [6, 5, 4, 3, 2]]));