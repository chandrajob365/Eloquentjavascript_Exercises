// Your code here.
function arrayToList(arr){
 var list = null;
  for(var i = arr.length-1 ; i>=0 ;i--){
   list={value:arr[i] , rest : list};
  }
  return list;
}
function listToArray(list){
 var array=[];
  for(var node = list ; node != null; node = node.rest){
   array.push(node.value);
  }
  return array;
}
function prepend(value , rest){
  return list = {value : value , rest : rest};

}

function nth(list , index){
 var counter =0;
  console.log(list);
  for(var node = list ; node ; node = node.rest){
   if(counter==index){
     return node.value;
 }
    counter++;
}
  if(index > counter-1){
  return "Invalid Index";
  }
}

function nthRecursive(list , index){
 if(!list){
  return undefined;
 }else if(index==0){
  return list.value;
 }else{
  return nthRecursive(list.rest , index-1);
 }
}
console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20
console.log(nthRecursive(arrayToList([10, 20, 30]), 2));
