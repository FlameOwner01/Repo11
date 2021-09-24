// Only change code below this line
var myNestedArray = [["Toblerone", 5]];
function myNestedFunction(arr){
    myNestedArray.push(["Milka" , 3]);
    return myNestedArray;
}
// Only change code above this line

console.log(myNestedFunction(myNestedArray));
module.exports = myNestedFunction; 