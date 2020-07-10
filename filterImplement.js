Array.prototype.myFilter = function (callback) {
  const myResult = [];
  for (let ind = 0; ind < this.length; ind++) {
    if (callback(this[ind], ind, this) === true) {
      myResult.push(this[ind]);
    }
  }
  return myResult;
};

const newArray = [1, 2, 3, 4].myFilter((ele, ind, arr) => ele > 2);
console.log(newArray);
