'use strict';
function main(number) {
    var result = [];
    if(number===99){
        for (var i=99;i>=2;i--) {
            result.push(i+"bottles of beer on the wall,"+i+"bottles of beer.\n"+
                "Take one down and pass it around,"+(i-1)+" bottles of beer on the wall.\n")
        }
    }
    else if (number===0){
        result ="1 bottle of beer on the wall, 1 bottle of beer.\n" +
            "Take one down and pass it around, no more bottles of beer on the wall.\n";
    }
    else {
        result = "No more bottles of beer on the wall, no more bottles of beer.\n" +
            "Go to the store and buy some more, 99 bottles of beer on the wall.";
    }
    return result;
}
module.exports = main;