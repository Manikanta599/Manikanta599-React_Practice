// function counter()
// {
//     console.log("outer fun");
//     var count=0;
//     function inner()
//     {
//         console.log("inside fun");
//         count++;
//         console.log(count);
//     }
//     return inner;
// }


// let inner=counter();
// console.log(inner());


/* 
A closure in JavaScript is a feature where an inner function has access to the outer (enclosing)
 function’s variables, even after the outer function has finished executing. 
 This is possible because the inner function "remembers" the variables from
  its outer scope through the closure.



  Advantages :
  -> Encapsulation and Data Privacy:
  Closures allow you to encapsulate variables within a specific function's scope, protecting them 
  from being accessed or modified from outside. Global variables, on the other hand, can be accessed
    or changed by any part of the program, which may lead to unintended behavior or bugs.

-> . Avoiding Global Namespace Pollution --two variables with the same name

-> Memory Efficiency
With closures, the variables in the outer function exist as long as they are needed 
(because they are referenced by the inner function), but they are not kept in memory
 longer than necessary. Global variables, on the other hand, stay in memory for the 
 entire lifecycle of the application, which could lead to unnecessary memory usage. 

 function createLargeObject() {
  let largeObject = { /* large data structure;
  return function () {
    // Do something with largeObject
    return largeObject;
  };
}
const accessObject = createLargeObject(); // The largeObject is retained only as long as accessObject exists. 

-->Modularity and Reusability 

function multiplier(factor) {
  return function (number) {
    return number * factor;
  };
}

const double = multiplier(2);
console.log(double(5)); // 10

const triple = multiplier(3);
console.log(triple(5)); // 15


  */




function counter()
{
    let count=0;
    return function()
    {
        count++;
        return count;
    };
}

// const inc=counter();
// console.log(inc());

// console.log(inc());  


//Modularity and Reusability
function fun1(factor)
{
    return function(mul)
    {
        return factor*mul;
    };
}

const double=fun1(2);
console.log(double(5));


/* 

Feature         	    Global Variables	                            Closures
Encapsulation	        Exposed to entire program	                    Encapsulated within function
Namespace Pollution	    High risk of conflicts	                        No risk, variables are local
Memory Usage	        Variables persist throughout app lifecycle	    Released when no longer needed

*/




