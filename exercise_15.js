function check (array){
    let count = 0 ;
    for ( let i = 0; i < array.length - 1; i++ ){
        if ( array[i][0] < array[i + 1][0]){
        count ++ ;
        }
    }
    if (count == 0){
        console.log("ma trận giảm dần");
    }else{
        console.log("ma trận không giảm dần");
    }
}
check ([[1, 2, 3],
        [3, 5, 7],
        [5, 4, 6]]);