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
console.log('Headers : '  , headers);
function groupOfHeaders(dataArr){
  return dataArr.map(function(element , index){
    console.log('INDEX = ' , index + " element " , element)
    var tempArr =[];
      for(var prop in element){
        tempArr.push(element[prop])
      }
      console.log('tempArr After each call --> ' , tempArr);
      return tempArr;
    //return element[index];
  });
}

var arrayOfArraysFromArrayOfObjects = groupOfHeaders(dataArr);
console.log(arrayOfArraysFromArrayOfObjects);
var tempMaxSizeArr =[];
var maxSizeArr = maxValue(arrayOfArraysFromArrayOfObjects);

function maxValue(arr){
  var rows = arr.length;
  var cols = arr[0].length;
  console.log('rows = ' + rows + '  Cols = ' + cols);
  for(var i =0 ; i< cols ; i++){
    var tmpArr =[];
    console.log('Current cols = ' + i);
    for(var j =0 ; j < rows ; j++){
      console.log(' Current Row = ' + j);
      console.log('arr['+j+']['+i+']=' + arr[j][i]);
      tmpArr.push(arr[j][i].toString().length);

    }
    console.log(tmpArr);
    var maxSize = tmpArr.reduce(function(max , element){
                          var m = Math.max(max,element);
                          console.log('m = ' ,m);
                          return m;
                        });
                        console.log('maxSize' + maxSize);
    tempMaxSizeArr.push(maxSize);
    console.log(tempMaxSizeArr);
  }
  console.log(tempMaxSizeArr);
  return tempMaxSizeArr;
}
console.log(arrayOfArraysFromArrayOfObjects);
console.log(maxSizeArr);


function headerWithAppropriateSpaces(headers){
  return headers.map(function(element,index){
    console.log(element);
    console.log("maxSizeArr[index] = " ,maxSizeArr[index] , "   element.length = ",element.length);
    var x = maxSizeArr[index]>element.length?element.concat(' '.repeat(maxSizeArr[index]-element.length+2)):element.concat(' '.repeat(2));
    console.log("Element with space length = " , x.length);
    return x;
  });
}

var newHeadersWithSpaces = headerWithAppropriateSpaces(headers);
console.log('newHeadersWithSpaces -- ' ,newHeadersWithSpaces);
function dottedLinesForSecondRow(maxSizeArr){
  var dottedArr =[];
  for(var i =0 ; i< maxSizeArr.length ; i++){
    dottedArr.push('-'.repeat(newHeadersWithSpaces[i].length-2).concat(' '.repeat(2)));
  }
  return dottedArr;
}

var SecondRowWithDottedLines = dottedLinesForSecondRow(maxSizeArr);
console.log("SecondRowWithDottedLines ---> " ,SecondRowWithDottedLines);
var HeaderAndNextLine = newHeadersWithSpaces.concat(SecondRowWithDottedLines);
console.log("Concatenated Array : " ,HeaderAndNextLine );
displayFirstTwoLines(HeaderAndNextLine);
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



var combinedArr =[];
function arrangeData(dataArr){
  for(var i = 0 ; i<dataArr.length; i++){
    var temp ='';
    for(var j = 0 ; j < dataArr[i].length ; j++){
      var maxLen = Math.max(headers[j].length , maxSizeArr[j]);
      //console.log('type of arr[i][prop] ---> ' , typeof arr[i][prop]);//typeof arr[i][prop] === 'string' || arr[i][prop] instanceof String
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

console.log(arrangeData(arrayOfArraysFromArrayOfObjects));


function displayData(combinedArr){
  for(var i in combinedArr){
    console.log(combinedArr[i]);
  }
}
console.log('    ');
console.log('    ');

console.log('    ');

console.log('========FINAL PRINT===============');
console.log('    ');
console.log('    ');

console.log('    ');


displayFirstTwoLines(HeaderAndNextLine);
displayData(combinedArr);

console.log('    ');
console.log('    ');

console.log('    ');
