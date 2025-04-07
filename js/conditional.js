//Conditional Statements

// let age = 16;

// if(age >= 18)
// {
//     console.log("You can vote");
// }

// if(age < 18)
// {
//     console.log("You can't vote");
// }

// let mode = "dark";
// let color;

// if(mode === "dark")
// {
//     color = "black";
// }
// else{
//     color = "white";
// }

// console.log(color);

// let age = 17;

// if(age >= 18)
// {
//     console.log("You can vote");
// }
// else
// {
//     console.log("You can't vote");
// }

// //odd or even
// let num = 10;

// if(num%2 == 0)
// {
//     console.log("Number is Even");
// }
// else
// {
//     console.log("Number is odd");
// }

// let age = 70

// if(age <  18)
// {
//     console.log("Junior");
// }
// else if(age > 60){
//     console.log("Senior")
// }

// let mode = "dark";
// let color;

// if(mode == "dark")
// {
//     color = "black";
// }
// else if(mode == "blue")
// {
//     color = "blue";
// }
// else if(mode == "pink")
// {
//     color = "pink";
// }
// else{
//     color = "white";
// }

// console.log(color);

// let age = 27;
// // age > 18 ? console.log("Adult") : console.log("Not Adult");

// let result = age >= 18 ? "Adult" : "Not Adult";
// console.log(result);

//Practice question - 1

//alert("Hello!"); //it creates one time pop up

// let name = prompt("Hello!");
// console.log(name);  

// let num = prompt("Enter a Number");


// if(num % 5 == 0)
// {
//     console.log(num,"multiple of 5");
// }
// else{
//     console.log(num,"Not a multiple of 5");
// }


//Practice set 2

let score = prompt("Enter Your Score(0-100):");
let grade;
if(score >= 90 && score <=100)
{
    grade = "A";
}
else if(score >= 70 && score <=89){
    grade = "B";
}
else if(score >= 60 && score <=69){
    grade = "C";
}
else if(score >= 50 && score <=59){
    grade = "D";
}
else{
    grade = "F";
}

console.log("According to your score ,your grade was :",grade);