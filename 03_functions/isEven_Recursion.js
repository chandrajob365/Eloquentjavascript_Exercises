function isEven(input){
  var input_in_Str = String(input);
  if(input_in_Str[input_in_Str.length-1]==1){
    return "ODD";
  }else if(input_in_Str[input_in_Str.length-1]==0){
    return "EVEN";
  }
  return isEven(input-2);
}
console.log(isEven(-2));