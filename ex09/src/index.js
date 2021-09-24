// Only change code below this line
var myArray1 = [7, "ate", "", false, 9];
var myArray2 = ["a", "b", "c"];
var myArray3 = [false, null, 0, NaN, undefined, ""];
var myArray4 = [null, NaN, 1, 2, undefined];

function myBouncer(aar){
    var myArr=[...aar];
    var myNewAar = [];
    for (let i = 0; i < myArr.length; i++) {
        myNewAar = myArr.filter(element => !(element == "" || element == 0 || element == undefined || element == false || element == null));
        
    }
    return myNewAar;
}
// Only change code above this line
console.log(myBouncer(myArray1));
console.log(myBouncer(myArray2));
console.log(myBouncer(myArray3));
console.log(myBouncer(myArray4));
module.exports = myBouncer; 