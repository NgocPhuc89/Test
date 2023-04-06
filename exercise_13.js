function check (array_a , array_b){
    let count = 0;
    let p = 0 ;
    for ( let i = 0; i < array_a.length; i++){
        for ( let j = 0; j < array_b.length; j++){
            if ( array_a[i] == array_b[j]){
                count ++ ; 
        }
    }
}
    if ( count == array_a.length ){
        console.log ("mảng a nằm trong mảng b");
    }else{
        console.log ("mảng a không nằm trong mảng b");
    }
}

check ([1, 2, 7],[1, 2, 3, 4, 5, 6]);
