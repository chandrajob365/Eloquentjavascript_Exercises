function isBigEnough(element, index, array) {
  console.log(element);
  return element >= 10;
}
console.log("-----Every Result-----");
var everyRes=[12, 130, 5, 44,8].every(isBigEnough);
console.log(everyRes);
console.log("-----Some Result-----");
var someRes=[12, 130, 5, 44,8].some(isBigEnough);
console.log(someRes);


function newEvery(array){
  array.forEach(function(element){
    console.log(element);
    return element >=10;
  });
}

var res = newEvery([[12, 130, 5, 44,8]]);
console.log("newEvery res --> "+res);
