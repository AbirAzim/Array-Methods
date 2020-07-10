Array.prototype.myEvery = function (callback) {
  const myResult = [];
  for (let ind = 0; ind < this.length; ind++) {
    myResult.push(callback(this[ind], ind, this));
    if (myResult[ind] === false) return false;
  }
  return true;
};

const newArray = [12, 54, 18, 130, 44].myEvery(isBigEnough);
console.log(newArray);

function isBigEnough(element, index, array) {
  return element >= 10;
}
