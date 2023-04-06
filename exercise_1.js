function great (array){
    let sum = 0 ;
    for ( let i = 0 ; i < array.length ; i++){
        if ( array[i] < array[i+1]){
            sum += array[i+1];
        }
    }
    return sum ;
}
console.log (great ([1, 3, 7, 3, 6, 2, 9]));