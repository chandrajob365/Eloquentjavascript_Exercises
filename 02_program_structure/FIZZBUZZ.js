function fizzBuzz(no_of_iterations)
{
  var n = no_of_iterations;
  for(var i =1 ; i<=n ; i++){
    if(i%3 ===0 && i%5 === 0){
     console.log("FIZZBUZZ"); 
    }else if(i%3===0){
      console.log("FIZZ");
    }else if(i%5===0){
      console.log("BUZZ");
    }else{
      console.log(i);
    }
  }
}

fizzBuzz(100);