const assert = require("assert");

// Feel free to look things up online!
// TODO - write a function which converts a multi-word string into an array of words
const tokenize = str => {
  return str.split(' ')
}
console.log(tokenize("jeff needs a banana"))


const reverse = str => {return tokenize(str).reverse().join(' ')
  // TODO - write a function which reverses the string
};
console.log(reverse("my name is"))

const uniqueOnes = arr => { let unique = [new Set(arr)];
  return unique;
  // TODO - write a function which returns the inputted array without duplicate elements
};
//console.log(uniqueOnes([2,2,3]))


const factorial = num => {
  if (num >=1) 
  {
    return num * factorial(num-1)}

  else return 1}
console.log(factorial(3))


const check = (arr) => {
  if (arr = [1]) 
  {return true}
   else return false
}
console.log(check([1]))


const zip = (arr1, arr2) => {
  const x = 0;
  const ans = [];
  if (arr1.length = arr2.length) {
    while x <= arr1.length {
      for i in arr1 (
       for j in arr2 ( 
          ans = ans.concat(i,j);
          x++
          i++;
          j++;
    )}

  }
  else return -1
}

  //


  //


  // TODO - write a function which combines two arrays into an array of 2-element arrays and returns -1
  // if the two arrays are of unequal length
  // Example: zip([1, 2, 3], [5, 3, 1]) === [[1, 5], [2, 3], [3, 1]]
};

const unzip = arr => {
  // TODO - Write a function which does the opposite of `zip()`
};


const shiftRight = (str, num) => {
  // TODO - write a function which shifts a string `num` characters to the right
  // Example = shiftThree("Hello") === "lloHe"
};

const announceDate = () => {
  // TODO - write a function which returns the current date in the following format:
  // "Today's date is January 7th, 2016. It is eleven thirty-seven in the morning."
};

// Write tests here:

assert(1 < 2);
assert(1 + 2 === 3);
assert([2, 3][0] === 2);
// asssert (reverse("3df") === "fd3")

// DAY 1 Lecture Destructing, Rest Operator

// const obj = {
//   name: {"Spencer"}
//   user: {
//         username: "Diego",
//         friend:{
//               friendname: "Jada"
//         }
//     }
    
// }

// const {name, user: {username, friend: { friendname}}} = obj
// console.log(name, username, friendname)

// const user = {
//       name: "Spencer"
//       grade: "A"
// }

// const {name, grade} = user

// //rRest Operator

// const [a, b, ...rest] = [1, 2, 3, 4, 5]

// //spread operator
// function sum(x, y, z) {
//   return x + y + z
// }

// const numbers = [1, 2, 3]

// console.log(sum(...numbers))


//Arrow Functions'

//Array methods,  Map() Sort() Filter() reduce()

// Map  is an array method like array.map(foo) and a function foo -- for every element in Array, 
//       it applies the function foo to the element in array, then returns the final new array
// filter creates new array .  it gets called like arr.filter() where u give filter the "test" for truth to weed out whatever you want
//       and it keeps all true elemenets
//reduce   (general accumulator)
//
// Sync vs Asynch JS
// JS is a single threaded synchronous language,  so if something isnt working it may tak e along time to load the screen
//but there ewill be asynch parts as well (needed for balance/operating security)
//   setTimeout() jQuery.ajax() fetch() Databasecalls   
//
//  asynch declaration happens before first argument in defining function, must be matched with an await.
//  
//  Queries -- callbacks  ob.query(id).then(fun--->)  it means let this finish, then use the result from when this finishes.
//  Promise states -- Pending, Fulfilled or Rejected  promising a value letter on  " its a function that says oh im working on it right now andc
// ill get you the value later"
//
//
//

