function average (array){
    // let array = [];
    let sum = 0;
    let count = 0 ;
    for ( let i = 0 ; i < array.length ; i++){
        if ( array[i] > 0){
            sum += array[i];
            count ++
        }
    
    }
    return p = sum / count;
}
console.log(average ([5, 4, -5, -1, 6]));