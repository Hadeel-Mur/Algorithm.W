//First solve this algorithm iteratively, then recursively.

// Given base and n that are both 1 or more, compute recursively (no loops) the value of base to the n power, so powerN(3, 2) is 9 (3 squared).
// powerN(3, 1) => 3
// powerN(3, 2) => 9
// powerN(3, 3) => 27


// Pseudocode
// 1- define a function called 'powerN' with 2 arguments
// 2- check if the second value = 1, then return the value of first argumant 'base'
// 3- if the second value 'n' greater than 1, then call the 'powerN' function
// with the same value of the first argument'base' and n-1
// 4- multiply the result of the recursive call to 'powerN' with 'base'
// to get the result of raising 'base'   to the power of 'n'
// 5- return the result


// coding
function powerN(base, n){
    if (n == 1){
        return base;
    } else{
        return base * powerN(base, n -1)
    }

}

// diagram
// 1- calling 'powerN(3 ,1 )' will return 3 which is n =1
// 2- calling 'powerN(3 ,2 )' will return 9 which is n > 1
// 3- calling 'powerN(3 ,3 )' will return 27 which is n > 1
    
    
    
    
