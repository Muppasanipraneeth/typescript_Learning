type whattodo="up"|"down"|"right"|"left";
function dosomething(what :whattodo){
console.log(what);


}
dosomething("up");
dosomething("down");
dosomething("right");
dosomething("left");
//  to overcome this the clear way to read and write is enum
//Enums (short for enumerations) in TypeScript are a feature that allows you to define a set of named constants.
enum Direction{
    Up,
    Down,
    Right,
    Left
}

function DosomethingCrazy(what:Direction){
    console.log(what);
    

}
DosomethingCrazy(Direction.Left)