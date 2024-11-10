type strignornumber=string|number;
function print(a:strignornumber):void{
    console.log(a);
    
}
print("hello")
print(1)
interface User{
    name:string,
    age:number,

}
function isLegal(user:User):boolean{
    if(user.age>18){
        return true;
    }else{
        return false;
    }
}
const us1={
    name:"praneeth",
    age:19
}
console.log(isLegal(us1));
