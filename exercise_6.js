function listed (array ){
    for ( let i = 0; i < array.length ; i++){
        if (Math.abs(array[i]) > Math.abs(array[i + 1])){
            console.log(array[i]);
        }
    }
}
listed([1, 4, -2, 6, 10, -6, 16]);