"use strict";
function dosomething(what) {
    console.log(what);
}
dosomething("up");
dosomething("down");
dosomething("right");
dosomething("left");
//  to overcome this the clear way to read and write is enum
//Enums (short for enumerations) in TypeScript are a feature that allows you to define a set of named constants.
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Right"] = 2] = "Right";
    Direction[Direction["Left"] = 3] = "Left";
})(Direction || (Direction = {}));
function DosomethingCrazy(what) {
    console.log(what);
}
DosomethingCrazy(Direction.Left);
