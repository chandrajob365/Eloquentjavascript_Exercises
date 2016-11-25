var ANCESTRY_FILE = [
  '{"name": "Carolus Haverbeke", "sex": "m", "born": 1832}',
  '{"name": "Emma de Milliano", "sex": "f", "born": 1901}',
  '{"name": "Maria Sturm", "sex": "f", "born": 1915}'
  ];

function filter(array, test) {
  var passed = [];
  for (var i = 0; i < array.length; i++) {
  //console.log("i : " + i)
//  console.log(array[i]);
  var personObj = JSON.parse(array[i]);
    if (test(personObj)){
    console.log("Test true");
    //console.log(array[i]);
    passed.push(JSON.stringify(personObj));
    }

  }
  return passed;
}

console.log(filter(ANCESTRY_FILE, function(personObj) {

  console.log(" DOB : " + personObj.born);
  console.log(personObj);
  return personObj.born > 1900 && personObj.born < 1925;
}));
