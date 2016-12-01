function some(array){
  for(var i=0 ; i< array.length ; i++){
    if(chkPoint(array[i])){
      return true;
    }
  }
  return true;
}

function chkPoint(element){
  console.log(element);
  //return isNaN(element);
  return element >=10;
}

var res = some([12,130,44,8]);
console.log("result --> " + res);

//===================Every===============================
console.log("===================Every===============================");
function every(array){
  for(var i=0 ; i< array.length ; i++){
    if(!chkPoint(array[i])){
      return false;
    }
  }
  return true;
}

function chkPoint(element){
  console.log(element);
  //return isNaN(element);
  return element >=10;
}

var res = every([12,130,44,8]);
console.log("result --> " + res);
