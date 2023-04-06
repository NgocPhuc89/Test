function divisible_7 (array){
    for ( let i = 0 ; i < array.length ; i++){
        if (array[i] % 7 == 0){
            console.log(array[i]);
        }
    }
}
divisible_7([1, 7, 4, 6, 14, 20 , -7]);