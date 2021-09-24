// Only change code below this line
var myArray1 = [[2] , [5, 6, 7], [8 , 9]];
var myArray2 = [[2.5, 2], [0.5, 0.2], [8]];
var myArray3 = [[1, 2], [3, 4, 5, 6], [7, 8, 9]];
function multiplyArrayFunction(myArray){
    var myA= [...myArray];
    var prodSum = [];
    var sum = 0;
    var product = 1;

    for (let i = 0; i < myA.length; i++) {
        for (let j = 0; j < myA[i].length; j++) {       
        sum+= myA[i][j];
        product *= myA[i][j];
        }
    }
    prodSum = [product, sum];
    return prodSum;
}
// Only change code above this line
console.log(multiplyArrayFunction(myArray1));
console.log(multiplyArrayFunction(myArray2));
console.log(multiplyArrayFunction(myArray3));
module.exports = multiplyArrayFunction; 