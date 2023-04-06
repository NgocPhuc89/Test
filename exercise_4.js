function change (array){
    for ( let i = 0 ; i < array.length - i ; i++){
        let p = array[i] ;
        array[i] = array[array.length - 1  - i] ;
        array[array.length - 1 - i] = p;
    }
    return array;
}
console.log (change([1 , 2 , 3 , 4 , 5 , 6  , 8 , 9 , 10 ]));
