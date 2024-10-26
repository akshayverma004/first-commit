// function jai()
// {
//     console.log("j");
//     console.log("a");
//     console.log("i");
// }
// function shree()
// {
//     console.log("s")
//     console.log("h")
//     console.log("r")
//     console.log("e")
//     console.log("e")
// }
// function ram()
// {
//     console.log("r")
//     console.log("a")
//     console.log("m")
// }
// jai(); shree(); ram();

/*function abc()
{
    console.log(4+4)
}
abc();*/

/*function abc(a,b)
{
    console.log(a+b)
}
abc(7,10);*/

/*let num1=2
let num2=3
function abc(a,b)
{
    console.log(a+b)
}
abc(num1,num2)*/

/*let num1=["45"]
let num2=["1"]
function abc(a,b)
{
    console.log(a+b)
}
abc(num1,num2)*/

/*let num1={a:["45"]}
let num2={b:["1"]}
function add(x,y)
{
    console.log(x,a);
    console.log(y,b);
}
add(num1,num2);*/ //issue

/*let num1=22
let num2=11
function add(x,y)
{
    console.log(x+y)
}
const func1=add(num1,num2)
console.log(func1)*/ // because it does not get anything in return

/*let num1=22
let num2=11
function add(x,y)
{
    console.log(x+y)
}
console.log(add(num1,num2))*/  //because it does not get anything in return

/*let num1=22
let num2=11
function add(x,y)
{
    console.log(x+y)
    return 3+4
}
const func1=add(num1,num2)
console.log(func1)*/

/*let num1=11
let num2=22
function add(x,y)
{
    console.log(x+y)
    return 3+7
}
console.log(add(num1,num2))
const func1=add(num1,num2)
console.log(func1)*/

/*let num1=22
let num2=11
function add(x,y)
{
    console.log(x+y)
    return 3+4
    console.log("hero")
}
const func1=add(num1,num2)
console.log(func1)*/  //after return the code will not runs

/*let num1=22
let num2=11
function add(x,y)
{
    console.log(x+y)
    return 3+4
}
const func1=add
console.log(func1());*/

// other method of writing a function
/*let num1=22
let num2=11
const addition=function add(x,y)
{
    console.log(x+y)
    return 3+4
}
console.log(addition(num1,num2))*/

//arrow function

/*let num1=22
let num2=11
const arrw=(x,y)=>
    {
        console.log(x+y)
        return 3+4
    }
console.log(arrw(num1,num2))*/

/*let num1=22
const arrw=(x)=>
    {
        console.log(x)
    }
console.log(arrw(num1))*/ //in case of single input

/*let num1=22
const arrw=(x)=>console.log(x)
console.log(arrw(num1))*/

const obj={a:()=>
{
    console.log("hero @ obj")
}
}
console.log(obj.a())
