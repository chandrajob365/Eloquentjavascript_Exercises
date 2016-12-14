var map = Object.create(null);
function storePhi(event , phi){
map[event]=phi;
}
storePhi("Pizza" , 0.069);
storePhi("touched Tree" , -0.081);
Object.prototype.nonsense = 'Hi';
for(var name in map){
    console.log(name);
}

console.log("nonsense" in map);
