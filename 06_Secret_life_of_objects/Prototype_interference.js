var map ={}
function storePhi(event , phi){
map[event]=phi;
}
storePhi("Pizza" , 0.069);
storePhi("touched Tree" , -0.081);
//Object.prototype.nonsense ='Hi'; --- Enumerable
Object.defineProperty(Object.prototype , "hiddenNonsense" , {enumerable : false , value : "Hi"});
for(var name in map){
  if(map.hasOwnProperty(name)){
    console.log(name);
  }

}
console.log("=======================");
console.log(map.nonsense);
console.log(map.Pizza);
console.log("toString" in map);
console.log(map.hasOwnProperty("toString"));
console.log(map.hasOwnProperty("hiddenNonsense"));
console.log("hiddenNonsense" in map);
console.log("Pizza" in map);
console.log(map.hasOwnProperty("Pizza"));
