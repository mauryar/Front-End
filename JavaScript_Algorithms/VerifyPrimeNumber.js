/**
 * Created by rajan on 7/16/2017.
 */

//Q. How would you verify a prime number?

//A. a prime number is only divisible by itself and 1.
//Since all numbers are divisible by 1, start checking from 2.
//If a number is divisible by a ultiple of 2, then it is divisible by 2 also.
// Any number will not be divisible by a number bigger than half of it.
//divisor would be less than Math.sqrt (n)

(function () {
"use strict";
    function isPrime(n) {

        if(n%2 == 0){
            return false;
        }
        var divisor = 3;
        var stop = Math.sqrt(n);
        while (divisor <= stop){
            if(n%divisor == 0){
                return "The number is not a prime number";
            }else{
                divisor += 2;
            }
        }

        return "The number is a prime number";

    }

    console.log(isPrime(237)); //The number is not a prime number

})();

