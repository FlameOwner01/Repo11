// Only change code below this line
function mySplice(aar1, aar2, n){
    var myArr = [...aar2];
    var myAar2=[];
    
for(var i = 0; i < aar1.length; i++){
        var j = aar1.length-1;
        myAar2[i] = aar1[j];
        j++;
    }
   
    myArr.splice(n, 0, myAar2);
        
    
    return myArr;
}
// Only change code above this line
console.log(mySplice([1, 2, 3], [4, 5], 1));
console.log(mySplice([1, 2, 3], [4, 5], 2));
console.log(mySplice(["b", "c"], ["a", "d"], 1));
console.log(mySplice(["Dell", "Philips"], ["Samsung", "AOX", "Sony"], 2));
module.exports = mySplice; 