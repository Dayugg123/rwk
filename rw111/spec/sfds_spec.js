'use strict';

var main = require('../main/main.js');

describe('main',function () {
    var head = [];
    for (var i=99;i>=2;i--){
        head.push(i+"bottles of beer on the wall,"+i+"bottles of beer.\n"+
            "Take one down and pass it around,"+(i-1)+" bottles of beer on the wall.\n");
    }
    var middle = "1 bottle of beer on the wall, 1 bottle of beer.\n" +
        "Take one down and pass it around, no more bottles of beer on the wall.\n";
    var end = "No more bottles of beer on the wall, no more bottles of beer.\n" +
        "Go to the store and buy some more, 99 bottles of beer on the wall.";
    it('墙上有1到99个瓶子', function() {

        var result = main (99);
        expect(result).toEqual(head);
    });
    it('墙上没有瓶子', function() {

        var result = main (0);
        expect(result).toEqual(middle);
    })
    it('墙上没瓶子，去买了99个瓶子', function() {

        var result = main ();
        expect(result).toEqual(end);
    });

});