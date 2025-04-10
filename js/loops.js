//for loop

// for(let i = 1; i<=5; i++)
// {
//     console.log("Hello Ashitosh!");
// } 

// for(let i = 1; i<=5; i++)
// {
//      console.log("i =",i);
// } 

//sum of 1 to n
// let n = prompt("Enter a number");

// let sum = 0;
// for(let i = 1;i<=n;i++)
// {
//    sum = sum + i;
// }

// console.log(sum);

//While loop

// let i = 1;

// while(i<=5)
// {
//     console.log("i =",i);
//     i++;
// }

// let i = 1;

// do{
//     console.log("i =",i);
//     i++;
// }while(i<=5);   

//for-of loop

// for-in loop  

// let student ={
//     name : "Ashitosh",
//     age :21,
//     cgpa : 7.7,
//     isPass : true,
// };

// for(let key in student){
//     console.log(key,"=",student[key]);
// }

//Practice question 1

// for(let i = 0;i<=100;i++)
// {
//     if(i%2 == 0)
//     {
//         console.log("No =",i);
//     }
// }

//practice question-2

let gameNumber = 27;

let userNum = prompt("Guess the game number :");

while(userNum != gameNumber)
{
    userNum = prompt("You enterd wrong number,Guess again");
}
console.log("Congratulations You enterd right number");
