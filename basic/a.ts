const a: number = 9;
console.log(a);

function greet(user: any): void {
    console.log(`Hello ${user}`);
}

greet(9);

const sum = (a: number, b: number): number => {
    return a + b;
};
console.log(sum(1, 2));

const age:number=10;
const isLegal = (age: number): boolean => {
    return age > 18;
};

console.log(isLegal(age));
// run after 2 second

function runafterse(fn:()=>void){
    setTimeout(fn,1000)
;}
runafterse(()=>{
    console.log("hello praneeth");
    
})
