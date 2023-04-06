function quantity (array){
    let count = 0
    for ( let i = 0 ; i < array.length ; i++){
        if (array[i] % 2 ==0 && array[i +1] % 2 ==0 ){
            count ++ ;
        }
    }
    return count;
}

console.log(quantity ([1, 2, 3, 4, 6, 8, 9, 10, 12]));