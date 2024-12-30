// console.log("Starting")
// //assignment operator
// let x=10
// var y=100
// const z=20

// //Arithmetic operators

// console.log("add: ",x+y)
// console.log("sub: ",x-y)
// console.log("mul: ",x*y)
// console.log("div: ",x/y)
// console.log("mod: ",y%x)

// //Comparison operators

// console.log("greater then: ",x>y)
// console.log("less then: ",x<y)
// console.log("gr eq: ",x>=y)
// console.log(x<=y)
// console.log(x==y)
// console.log(x!=y)
// console.log(x===y)
// console.log(x!==y)

// //logical operator

// if(x>10 && y>10 || x<10 ){
//     console.log("true");
// }

// //binary operator

// console.log(x>>1)   
// console.log(x<<1)
// console.log(x|y)
// console.log(x&y)
// console.log(x^y)

// //ternary operator
// console.log(x%2==0?"even : ":"odd")

// //condition statement

// if(x%2==0){
//     console.log("x is even");
// }
// else{
//     console.log("x is odd");
// }

// //loop condition

// for(let i=0;i<10;i++){
//     console.log(i);
// }
// // arrays

// arr=[10,20,30,40,50]
// for(i in arr){
//     console.log(arr[i]);
// }

// for(i of arr){
//     console.log(i);
// }

// // objects 
// ob={
//     Num:10,
//     Str:"Hello",
//     Bol:true
// }
// ob["const"]=""
// console.log(ob.Num)




//function

// function myfun(hi){
//     console.log("Hello, ",hi);
// }
// myfun("World")



// arrow function


// const myfun2=(hi)=>{console.log("Hello, ",hi)} 
// myfun2("World")




//destructing

// var mark=[10,12,13,14]
// var[a,b,c,d]=mark
// console.log(a);

// var person = {
//     name: "John",
//     age: 30,
//     city: "New York"
// }
// var {name, age, city} = person
// console.log(name);



//spread  operator
// stuentslist=["a", "b", "c", "d"]
// newstudent=["e", "f"]
// combinedstudentList=[...stuentslist,...newstudent]
// console.log(combinedstudentList)



//rest operator
// function restoti(...arg){
//     console.log(...arg)
// }
// restoti(1,2,3,4,5)




//hoisting operator
// console.log(a)
// var a=10
// console.log(a)



//call back
// function data(callback, ...arr){
//     setTimeout(()=>{
//         callback(arr)
//     },2000)
// }
// function printdata(data){
//     console.log(...data);
// }

// data(printdata, 1,2,3,4,5);



// for each

// let arr=[10,20,30,40,[50,55],60,70,80,90];

// arr.forEach((element, index) => {
//     console.log(element, index);
// });

// for each object

// let obj={
//     name:"John",
//     age:30,
//     city:"New York"
// }
// arr=[]
//  for(var key in obj){
//     console.log(key);
//     arr.push(key);
//  }
//  console.log()
//   arr.forEach(element => {
//     console.log(obj[element]);
//   });

//   Object.keys(obj).forEach(key =>{
//     console.log(obj[key]);
//   })


//await and async

// async function funname(){
//     setTimeout(() => {
//         console.log("hii")
//     }, 5000);
//     console.log(await "hiii")
// }
// ar=async()=>{
//     setTimeout(() => {
//         console.log("kec");
//     }, 4000);
//     console.log(await "kec")
// }
// funname();
// ar();

// cls=async()=>{
//     setTimeout(() => {
//         console.log("AIML");
//     }, 3000);
//     return  await"IML";
// }
// console.log(cls().then((a)=>{console.log(a)}))

//promise locations finder

locfun = async()=>{
    let train =7
    return new Promise((resolve, reject)=>{
        if(train==7){
            resolve("train has arrived")
        }else{
            reject("train has not arrived")
        }
    })
}
locfun().then((a)=>{
    console.log(a)
}
).catch(function(err){console.log(err)})