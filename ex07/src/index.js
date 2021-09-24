// Only change code below this line
var myArray1 = [[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]];
var myArray2 = [[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]];
var myArray3 = [[17, 23, 25, 12], [25, 7, 34, 48], [4, 10, 18, 21], [72, 3, 17, 10]];
function largestNumFromArr(aar){
    var maxNumArray=[...aar];
    var maxNum = [];
    for (let i = 0; i < maxNumArray.length; i++) {
        var number = 0;
        for (let j = 0; j < maxNumArray[i].length; j++) {
            if(maxNumArray[i][j]>number) number = maxNumArray[i][j];
        }
        maxNum.push(number);
    }

    return maxNum;
}
// Only change code above this line
console.log(largestNumFromArr(myArray1));
console.log(largestNumFromArr(myArray2));
console.log(largestNumFromArr(myArray3));
module.exports = largestNumFromArr; 