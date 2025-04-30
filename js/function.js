// function myFunction(){
//     console.log("Welcome to apna college");
//     console.log("We are learning Js: ");
// }

// myFunction();

// function myFun(msg,n){
//     //Parameter ->input
//     console.log(msg);
// }

// myFun("I love Js");//argument

// function sum(x,y){
//     return x + y;
// }
// let val = sum(2,5);
// console.log(val);

// //Modern js
// const sum1 = (x,y) =>{
//     console.log(x+y);
// }

//practice question 1

// function countVowels(str){
//     let count = 0;
//     for(const char of str){
//         if(char === "a" || char === "e" || char === "i" || char=== "o" || char === "u"){
//             count++;
//         }
//     }
//     return count;
// }

// let val = countVowels("aaa");
// console.log(val);

//Practice question 2
// const countVow = (str) =>{
//     let count = 0;
//     for(const char of str){
//         if(char === "a" || char === "e" || char === "i" || char=== "o" || char === "u"){
//             count++;
//         }
//     }
//     return count;
// }

// let val = countVow("aaa");
// console.log(val);

//For each loop
// let arr = [1,2,3,4,5];

// arr.forEach((val) =>{
//     console.log(val);
// })

//parctice question 3
// let arr = [1,2,3,4,5];

// arr.forEach ((val) =>{
//   console.log(val*val);
// })

// let nums = [67,87,99];

// nums.map((val) =>{
//   console.log(val);
// })

//Map method
// let nums = [94,23,12,20];

// let newArr = nums.map((val) =>{
//   return val;
// })

// console.log(newArr);

//Filter Method
// let arr = [1,2,3,4,5,6,7,8];

// let evenArr = arr.filter((val)=>{
//   return val%2===0;
// })

// console.log(evenArr);

//Reduce Method
// let arr = [1,2,3,4];

// let sum = arr.reduce((prev,curr)=>{
//   return prev + curr;
// })

// console.log(sum);

// Practice question 4

// let arr = [87,88,95,34,97,99];

// let marks = arr.filter((val) =>{
//   return val > 90;
// })

// console.log(marks);

//Practice question 5

let n = prompt("Enter a Number:");

let arr = [];

for(let i = 1 ;i<=n;i++){
  arr[i-1] = i;
}

console.log(arr);

let sum = arr.reduce((prev,curr)=>{
  return prev + curr;
})

console.log(sum); 

let factorial = arr.reduce((prev,curr)=>{
   return prev * curr;
})

console.log(factorial);