/**
 * Spread Operator
The Spread Operator is used to expand or spread elements from an iterable (like an array or string)
 into individual elements. 

 * 
 */

 //copying array
 const originalArray = [1, 2, 3];
 const dup=[...originalArray];
 console.log(dup);

 //Merging Arrays:
 const array1 = [1, 2];
const array2 = [3, 4];
const mergedArray = [...array1, ...array2];
console.log(mergedArray)


//Passing Arguments to Functions: use the spread operator to pass an array as individual arguments to a function.
function display(a, b, c,d) {
    console.log(a, b, c,d);
  }
  const args = [1, 2, 3,4];
  display(...args); 

  //Object Literals 

const user = { name: 'Alice', age: 25 };
const newUser = { ...user, location: 'NY' };
console.log(newUser); // Output: { name: 'Alice', age: 25, location: 'NY' }


/**
 * The rest operator is used to gather remaining elements into an array or object. It’s 
 * especially useful for handling variable-length arguments in functions or when destructuring
 *  objects or arrays.
 */

//Function Parameters:

function sum(...numbers)
{
    return numbers.reduce((acc,num)=>acc+num,0);
}

console.log(sum(1,2,3));

//Array Destructuring:
const[first,...rest]=[1,2,3,4];
console.log(first);
console.log(rest);


// Object Destructuring:

const user1 = { nam: 'Alice', age: 25, location: 'NY' };
const { nam, ...rest1 } = user1;
console.log(nam); // Output: 'Alice'
console.log("rest of ",rest1); // Output: { age: 25, location: 'NY' }


