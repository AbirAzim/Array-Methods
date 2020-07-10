function isBiggerThan10(element, index, array) {
  return element > 10;
}

Array.prototype.mySome = function (callback) {
  const myResult = [];
  for (let ind = 0; ind < this.length; ind++) {
    myResult.push(callback(this[ind], ind, this));
    if (myResult[ind] === true) return true;
  }
  return false;
};

let res = [12, 5, 8, 1, 4].mySome(isBiggerThan10);
console.log(res);
