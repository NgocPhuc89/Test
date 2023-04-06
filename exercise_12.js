function ascending(array){
    let count = 0;
    for ( let i = 0; i < array.length; i++){
        if ( array[i] > array[i + 1]){
            count ++ ;
        }
    }
    if ( count == 0){
        console.log ("mảng tăng dần")
    }
    else {
        console.log ("mảng không tăng dần");
    }
}
ascending([1, 2, 3, 4, 5 , 6, 7]);