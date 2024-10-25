/* 1. Two arguments

Transform this function:
```js
function sum(num1, num2){
    return num1 + num2
}

sum(40,2)
sum(42,0)
console.log("the answer to everything is", sum(42,0))
```*/


let sum = (a,b)=>a+b;

console.log(sum(42,2));



/*2. One argument
Transform this function that tells you how long a string is:

function stringLength(str){
    console.log(`the length of "${str}" is:`, str.length)
}
*/
let longestCityNameInTheWorld = "Taumatawhakatangihangakoauauotamateaturipukakapikimaungahoronukupokaiwhenuakitanatahu"

//stringLength(longestCityNameInTheWorld)


let tamano = str => str.length;

console.log(tamano(longestCityNameInTheWorld));





/*3. One argument, pt.2
Let's change the previous function a bit to include a variable and a return statement:

function stringLength(str){
    let length = str.length
    console.log(`the length of "${str}" is:`, length)
    return str.length
}

stringLength("willynilly")
*/



let stringLength = (string => string.length);

console.log(`the length of "${stringLength}" is: `, stringLength("willynilly"));


/*4
Transform this function that selects a random element from the array and concatenates it to your name:

let alerts = ["Hey, you are awesome", "You are so wonderful", "What a marvel you are", "You're so lovely", "You're so sweet that I'd think you're a sweet potato -- and I LOOOOVE POTATOES"]

function showAlert(name){    
    alert(alerts[(Math.floor(Math.random()*alerts.length))] + `, ${name}!`)
}

showAlert("you ball of fluff")

*/

let alerts = ["Hey, you are awesome", "You are so wonderful", "What a marvel you are", "You're so lovely", "You're so sweet that I'd think you're a sweet potato -- and I LOOOOVE POTATOES"]


let showAlert = (name) => alert(alerts[(Math.floor(Math.random()*alerts.length))] + `, ${name}!`)

//showAlert("Oscar");

/*
6. Write an arrow function that returns the string, Hello, I am ${name}, and I am ${age} years old.


function mostrar (name, age){

        let muestra = `I am "${name}" and I am " ${age}, " years old.`;

        return muestra;
}

*/

let mostrar = (name,age)=> `I am "${name}" and I am " ${age}, " years old.`;


console.log(mostrar("Oscar",25));



/*
7. Write an arrow function that takes an array of integers, and returns the sum of the elements in the array. 
Google and use the built-in reduce array method for this.

*/

let array2 = [1,2,3];

function sumaArray (array){

    let suma=0;

    //array.forEach(element => element);
    //array.forEach(element => suma += (element));

    for (let recorre of array){
        suma += recorre;
    }
    


    return suma;
}
console.log(sumaArray(array2));
//document.write(sumaArray(array2));

let suma = array2.reduce((a,b) => a + b, 0);
console.log(`Otra suma ${suma}`);




/*
8. The syntax of this function is wonky. Can you fix it to use the shortest arrow function possible?
*/

const fire = eye => "bulls";

console.log(fire("eye"));


//9. Refactor the following ES5 function to use an arrow function:
/*
    const fibonacci = function(n) {
    if (n < 3 && n!=0) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
    }


/*
const fibonacci = n => if (n<3) {return 1;} fibonacci(n-1)+fibonacci(n-2););
*/
const fibonacci = n => {if (n<3) {return 1;} if (n>2) return fibonacci(n-1)+fibonacci(n-2)};

console.log(fibonacci(20));


