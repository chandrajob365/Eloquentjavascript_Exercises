/*var dataArr = [
  {name : 'Everest' , height : 8848 , country : 'Nepal' , continent : 'Asia'},
  {name : 'Denali' , height : 6168 , country : 'United States' , continent : 'North America'},
  {name : 'Kilimanjaro' , height : 5895 , country : 'Tanzania' , continent : 'Africa'}
];*/

var dataArr = [
  {name : 'Everest' , height : 8848 , country : 'Nepal' , continent : 'Asia' , planet : 'Earth'},
  {name : 'Denali' , height : 6168 , country : 'United States' , continent : 'North America' , planet : 'Jupiter'},
  {name : 'Kilimanjaro' , height : 5895 , country : 'Tanzania' , continent : 'Africa' , planet : 'Saturn and Neptune'}
];

/*var dataArr = [
  {name : 'Everest' , height : 8848},
  {name : 'Denali' , height : 6168},
  {name : 'Kilimanjaro' , height : 5895},
  {name : 'Kilimanjaro2' , height : 5895}
];*/

var headers = Object.keys(dataArr[0]);

function groupOfHeaders(dataArr){

//Getting values for headers
var headers = Object.keys(dataArr[0]); // As key will be same in each object , so to get header value just taking it from first object

// Grouping all the values in array of array format from Array of Object
function arrayOfArraysFromArrayOfObjects(dataArr){
  return dataArr.map(function(element , index){
    var tempArr =[];
      for(var prop in element){
        tempArr.push(element[prop])
      }
      return tempArr;
  });
}

var arrayOfArraysFromArrayOfObjects = groupOfHeaders(dataArr);
var tempMaxSizeArr =[];
var maxSizeArr = maxValue(arrayOfArraysFromArrayOfObjects);

var arrayOfArraysFromArrayOfObjects = arrayOfArraysFromArrayOfObjects(dataArr);

var tempMaxSizeArr =[];
var maxSizeArr = maxValue(arrayOfArraysFromArrayOfObjects);

// Getting array of max sizes for each type of key(eg: max length from all mountain names  i.e Kilimanjaro = 11) in array of array
function maxValue(arr){
  var rows = arr.length;
  var cols = arr[0].length;
  for(var i =0 ; i< cols ; i++){
    var tmpArr =[];
    for(var j =0 ; j < rows ; j++){
      tmpArr.push(arr[j][i].toString().length);

    }
    tempMaxSizeArr.push(tmpArr.reduce(function(max , element){
                          return Math.max(max,element);
                        }));
  }
  return tempMaxSizeArr;
}


// creating Header with spaces so that it can define column length
function headerWithAppropriateSpaces(headers){
  return headers.map(function(element,index){
    return maxSizeArr[index]>element.length?element.concat(' '.repeat(maxSizeArr[index]-element.length+2)):element.concat(' '.repeat(2));
  });
}

var newHeadersWithSpaces = headerWithAppropriateSpaces(headers);


// creating second row of dotted lines with two extra spaces for gap between two columns

function dottedLinesForSecondRow(maxSizeArr){
  var dottedArr =[];
  for(var i =0 ; i< maxSizeArr.length ; i++){
    dottedArr.push('-'.repeat(newHeadersWithSpaces[i].length-2).concat(' '.repeat(2)));
  }
  return dottedArr;
}

var SecondRowWithDottedLines = dottedLinesForSecondRow(maxSizeArr);
var HeaderAndNextLine = newHeadersWithSpaces.concat(SecondRowWithDottedLines);

//Display of header and dotted Functions Start

function displayFirstTwoLines(HeaderAndNextLine){
    displayHalf(HeaderAndNextLine.slice(0,HeaderAndNextLine.length/2) );
    displayHalf(HeaderAndNextLine.slice(HeaderAndNextLine.length/2 , HeaderAndNextLine.length) );
}

function displayHalf(arr){
  var temp ='';
  for(var i in arr){
    temp += arr[i];
  }
  console.log(temp);
}
//Display of header and dotted Functions END

var combinedArr =[];

// arranging all the values to fit in column length
function arrangeData(dataArr){
  for(var i = 0 ; i<dataArr.length; i++){
    var temp ='';
    for(var j = 0 ; j < dataArr[i].length ; j++){
      var maxLen = Math.max(headers[j].length , maxSizeArr[j]);
      if(typeof dataArr[i][j] === 'string' || dataArr[i][j] instanceof String){

        temp += maxLen > dataArr[i][j].length ? dataArr[i][j].concat(' '.repeat(maxLen-dataArr[i][j].length+2)): dataArr[i][j].concat('  ');
      }else{
        temp += maxLen > dataArr[i][j].toString().length ? dataArr[i][j].toString().concat(' '.repeat(maxLen- dataArr[i][j].toString().length+2)): dataArr[i][j].toString().concat('  ');
      }
    }

    combinedArr.push(temp);
  }
  return combinedArr;
}

arrangeData(arrayOfArraysFromArrayOfObjects);

//Display of Data in tabular format
function displayData(combinedArr){
  for(var i in combinedArr){
    console.log(combinedArr[i]);
  }
}

displayFirstTwoLines(HeaderAndNextLine);
displayData(combinedArr);
