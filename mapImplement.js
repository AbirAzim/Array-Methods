Array.prototype.mymap = function (callback) {
  const myResult = [];
  for (let ind = 0; ind < this.length; ind++) {
    myResult.push(callback(this[ind], ind, this));
  }
  return myResult;
};

const newArray = [1, 2, 3, 4].mymap((ele, ind, arr) => ele > 2);
console.log(newArray);
