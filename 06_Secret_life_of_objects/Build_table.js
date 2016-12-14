var arr = [
  {name : 'Everest' , height : 8848 , country : 'Nepal'},
  {name : 'Denali' , height : 6168 , country : 'United States'},
  {name : 'Kilimanjaro' , height : 5895 , country : 'Tanzania'}
];
var header =Object.keys(arr[0]);
//console.log(header[0]);
// Grouping Names and Height
function groupOfHeader(arr , index){
  return arr.map(function(element){
    return element[header[index]];
  });
}
//Group of Names
var names = groupOfHeader(arr , 0);
// Group of Heights
var heights = groupOfHeader(arr , 1);
//Group of Countries
var countries = groupOfHeader(arr , 2);
console.log("Names --> " , names);
console.log("Height ---> " , heights);
console.log("Countries ---> " , countries);

//Calculate Max length in Name and Height group
var calculateMaxHeaderValueLength = function(values){
  return values.reduce(function(aggregator , value){
    return aggregator.toString().length > value.toString().length ? aggregator.toString().length : value.toString().length;
  });
}

//Max length of Mountain Name
var maxNameLength = calculateMaxHeaderValueLength(names);
//Max Height of Mountain
var maxHeightLength = calculateMaxHeaderValueLength(heights);
//Max Country length
var maxCountryLength = calculateMaxHeaderValueLength(countries);

console.log("Max Name Length --> " , calculateMaxHeaderValueLength(names));
console.log("Max Height Length --> " , calculateMaxHeaderValueLength(heights));
console.log("Max Country Length --> " , calculateMaxHeaderValueLength(countries));

console.log(maxHeightLength-header[1].length);
//Adding Mountain Name header to match it with max size of mountain name
var nameHeaderWithSpaces = maxNameLength>header[0].length ? header[0].concat(' '.repeat(maxNameLength-header[0].length)): header[0];
console.log(nameHeaderWithSpaces + "Name");
//Adding Mountain Height header to match it with max size of mountain name
var heightHeaderWithSpaces = maxHeightLength>header[1].length ? header[1].concat(' '.repeat(maxHeightLength-header[1].length)):header[1];
console.log(heightHeaderWithSpaces + "Height");

//Getting Headers in Arr with proper spaces
function getHeaderWithSpaces(arr){
  for(var prop in arr[i]){
    if(typeof arr[i][prop] === 'string' || arr[i][prop] instanceof String){

    }
}
// array of headers with appropriate spaces
var headerWithSpaceArr = [];
headerWithSpaceArr.push(nameHeaderWithSpaces.concat('  '));
headerWithSpaceArr.push(heightHeaderWithSpaces);

// array of '----' with size equall to respective headerWithSpace
var dottedLines = [];
dottedLines.push('-'.repeat(nameHeaderWithSpaces.length).concat(' '.repeat(2)));
dottedLines.push('-'.repeat(heightHeaderWithSpaces.length));
console.log(dottedLines);

// Display Headers and dotted lines
var display = function(arr){
  var temp ='';
  for(var i in arr){
    temp += arr[i];
  }
  console.log(temp);
}

//Combining Name and height of mountains with appropriate spacing
var combinedArr =[];
function arrangeData(arr){
  for(var i = 0 ; i<arr.length; i++){
    var temp ='';
    for(var prop in arr[i]){
      //console.log('type of arr[i][prop] ---> ' , typeof arr[i][prop]);//typeof arr[i][prop] === 'string' || arr[i][prop] instanceof String
      if(typeof arr[i][prop] === 'string' || arr[i][prop] instanceof String){
        temp += maxNameLength > arr[i][prop].length ? arr[i][prop].concat(' '.repeat(maxNameLength-arr[i][prop].length+2)): arr[i][prop].concat('  ');
      }else{
        temp += maxHeightLength > arr[i][prop].toString().length ? arr[i][prop].concat(' '.repeat(maxHeightLength-arr[i][prop].toString().length)): arr[i][prop];
      }
    }
    combinedArr.push(temp);
  }
  return combinedArr;
}

// Display data
function displayData(combinedArr){
  for(var i in combinedArr){
    console.log(combinedArr[i]);
  }
}

arrangeData(arr);
display(headerWithSpaceArr);
display(dottedLines);
displayData(combinedArr);
console.log(combinedArr);
//console.log(nameHeightCombinedArr);
//console.log(arrangeData(arr));
