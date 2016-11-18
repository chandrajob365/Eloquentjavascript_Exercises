function reverseArray(arr){
var tempArr =[];
  for(var i in arr){
   tempArr.unshift(arr[i]); 
  }
  return tempArr;
}

function reverseArrayInPlace(arr){
 for(var i =0 ; i<= Math.floor((arr.length-1)/2) ; i++){
   var old = arr[i];
   arr[i] = arr[arr.length-1-i];
   arr[arr.length-1-i] = old;
 }
  return arr;
}
console.log(reverseArray(["A", "B", "C" ,"D"]));
// → ["C", "B", "A"];
var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]