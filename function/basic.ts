// function add(num:number){
// return num+2
// }
// let ans=add(1)
// console.log(ans);
// export {}
// writing the objects

// type alias

type user={
    readonly _id:number,
    name:string ,
    email:string,
    isActive:boolean
}
function Createuser(user:user):user{
    return (user)

}
Createuser({_id:1,name:"praneeth",email:"pranee",isActive:false})
// readonly
let myuser:user={
    _id:1,
    name:"praneeth",
    email:"dsj",
    isActive:true

}
// console.log(myuser._id=1);this is only for the readonly
// union
let score:number| string=33

let seat:"asilse"|"jsdh"


// tuples


