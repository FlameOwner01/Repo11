// Only change code below this line
var myArray1 = ["hello", "hey"];
var myArray2 = ["hello", "Hello"];
var myArray3 = ["zyxwvutsrqponmlkjihgfedcba", "qrstu"];
var myArray4 = ["Mary", "Army"];
var myArray5 = ["Mary", "Aarmy"];
var myArray6 = ["Alien", "line"];
var myArray7 = ["floor", "for"];
var myArray8 = ["hello", "neo"];
var myArray9 = ["voodoo", "no"];
var myArray10 = ["ate", "date"];
var myArray11 = ["Tiger", "Zebra"];
var myArray12 = ["Noel", "Ole"];
function myMutation(aar){
    var myArr=[...aar];
    var firstWord = myArr[1];
    var secondWord = myArr[0];
    var letter;
    for (let i = 0; i < firstWord.length; i++) {
        letter = firstWord[i];
       if(secondWord.toUpperCase().includes(letter.toUpperCase())) continue;
       else return false;
    }
    return true;
}
// Only change code above this line
console.log(myMutation(myArray1));
console.log(myMutation(myArray2));
console.log(myMutation(myArray3));
console.log(myMutation(myArray4));
console.log(myMutation(myArray5));
console.log(myMutation(myArray6));
console.log(myMutation(myArray7));
console.log(myMutation(myArray8));
console.log(myMutation(myArray9));
console.log(myMutation(myArray10));
console.log(myMutation(myArray11));
console.log(myMutation(myArray12));
module.exports = myMutation; 