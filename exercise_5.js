function listed (array , x , y){
    for ( let i = 0 ; i < array.length; i ++){
        if (array[i] >= x && array[i] <= y){
            console.log (array[i]);
        }
    }
}
listed([1, 2, 3, 4, 5, 6, 7] , 2 , 5);