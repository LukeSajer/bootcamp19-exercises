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
    return num *factorial(num-1)}
  }    
  else{
  return 1}

}
console.log(factorial(3))


const zip = (arr1, arr2) => {
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
