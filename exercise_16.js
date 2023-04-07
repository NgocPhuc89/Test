function check (array){
    let count = 0 ;
    for ( let i = 0; i < array.length; i++){
        if (array[i] % 2 == 0){
            count ++ ;
        }
    }
    if ( count < array.length){
        console.log("ma trận tồn tại số lẻ ");
    }else{
        console.log("ma trận không tồn tại số lẻ");
    }
}
check ([8, 2, 4, 6, 1]);