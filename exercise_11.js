function symmetry (array){
    let count = 0
    for ( let i = 0 ; i < array.length - i ; i++){
        if (array[i] !== array[array.length - 1 - i]){
            count ++;
        }
    }
    if ( count == 0){
        console.log ("mảng đối xứng");
    }else {
        console.log ("mảng không đối xứng");
    }
}
symmetry([1, 2, 3, 4, 5, 4, 3, 2, 1]);