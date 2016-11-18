function chess_board(height , width){
  
  for(var i = 0 ; i< height ; i++){
    var str ='';
    for(var j = 0 ; j < width ; j++){
      str += ' # ';
    }
    if(i%2===0){
      console.log(' '+str);
    }else{
      console.log(str);
    }
    
  }
}

chess_board(8,4);