function countChar(input , findChar){
  var counter =0;
  for(var c in input){
    
    if(input.charAt(c)== findChar){
      counter++;
    }
  }
  return counter;
}

console.log(countChar('BBCCDCCD' , 'C'));