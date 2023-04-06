function change (array){
    for (let e = 0 ; e < array.length ; e++){
    for ( let i = 1 ; i < array.length - 1 ; i++){
        if ( array[i] % 3 == 0){
            let j = array[i];
            array[i] = array[i - 1] ;
            array[i - 1 ] = j ;
        }else{

            let p = array [i] ;
            array[i] = array[i + 1] ;
            array[i + 1 ] = p ;
        }
    }
}
return array ;
}
console.log (change([ 4, 7, 9, 10 ,14, 15, 21, 30]));