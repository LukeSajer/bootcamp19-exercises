// Complete the implementation of the following functions so that
// the output is [0, 3, 6, 9, 12]

const arr = [0, 1, 2, 3, 4];

const triple = (el) => {y = el * 3;
  return y
};

Array.prototype.map = function(fun) {
  let result = []
  for (let el of this) {
    newel = triple(el)
    result.push(newel)
  }
  return result;
};

console.log(arr.map(triple));
