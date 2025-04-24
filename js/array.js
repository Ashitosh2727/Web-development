// let marks =  [97,82,64,88,90];

// console.log(marks);
// console.log(marks.length);//property
// let heroes =  ["ironman","thor","Hulk","Shaktiman","Spidertman","antman"];
// console.log(heroes);    

// marks[1] = 87;
// //print all elements of array
// for(let i = 0;i<marks.length;i++)
// {
//     console.log(marks[i]);
// }

// //for of loop
// for(let hero of heroes)
// {
//     console.log(hero.toUpperCase());
// }

// let sum = 0,avg;
// for(let i = 0;i<marks.length;i++)
// {
//     sum = sum + marks[i];
    
// }

// avg = sum / marks.length;

// console.log(avg);

//Practice Question -2
let items = [250,645,300,900,50];

// let i = 0;
// for(let val of items)
// {
//     console.log(`value at index ${i} = ${val}`);
//     let offer = val/10;
//     items[i] = items[i] - offer;
//     console.log(`Value after offer ${items[i]}`); 
//     i++;
// }

// for(let i = 0;i<items.length;i++)
// {
//     let offer = items[i] /10;
//     items[i] = items[i] - offer;
// }

// console.log(items);

// let foodItems = ["Potato","apple","litchi","tomato"];
// foodItems.push("Banana");

// console.log(foodItems);
// foodItems.pop();
// console.log(foodItems);
// console.log(foodItems.toString());

// let marvel_heroes = ["Thor","Spiderman","ironman"];
// let dc_heroes = ["Superman","Batman"];

// let heroes = marvel_heroes.concat(dc_heroes);
// console.log(heroes);
// marvel_heroes.unshift("antman");
// console.log(marvel_heroes);
// marvel_heroes.shift();
// console.log(marvel_heroes);
// let marvel_heroes = ["Thor","Spiderman","ironman","antman"];

// console.log(marvel_heroes.slice(0,4));

// let arr = [1,2,3,4,5,6,7];
// arr.splice(2,2,101,102);

// console.log(arr);

//Practice question -3
let companies = ["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];

// companies.shift()
console.log(companies);

// companies.splice(2,1,"ola");
// console.log(companies);

companies.push("Amazon");
console.log(companies);