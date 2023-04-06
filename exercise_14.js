function check (array_a , array_b){
    let count = 0 ;
    for ( let i = 0; i < array_a.length; i++){
        for ( let j = 0; j < array_b.length; j++){
            if (array_a[i] * array_b[j] < 0){
                count ++ ;
            }
        }
    }
    if ( count == 0){
        console.log (" ma trận 2 chiều toàn dương");
    }else{
        console.log("ma trận 2 chiều không toàn dương");
    }
}
check ([1, 2, 3], [ 1, 2, 3, 4]);