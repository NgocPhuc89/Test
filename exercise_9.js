function prime (array){
   let count = 0;

    for ( let i = 0 ; i < array.length ; i++){
        if (array[i] <= 1){
            
        } 
        if (array[i] == 2){
            
        }  
        else {
            for ( let j = 2 ; j < array[i] ; j++){
                if ( array[i] % j == 0 ){    
                    
                }
            }  
        }
    }
    return p ;   
}
console.log(prime([1, 2, 3, 4, 5, 6, 7, 11]));