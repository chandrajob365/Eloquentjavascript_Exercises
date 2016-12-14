var protoRabbit = {
  speak : function(line){
    console.log("This " + this.type + " Rabbit says " + line + " !!");
    }
};

var killerRabbit = Object.create(protoRabbit);
killerRabbit.type = "Killer";
killerRabbit.speak("Spree");
