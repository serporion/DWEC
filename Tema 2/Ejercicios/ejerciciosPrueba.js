//We can use the spread operator to translate an array into individual arguments. For example, the below function expects three individual numbers as arguments:
let add = (num1, num2, num3) => num1 + num2 + num3;

function suma (numa, numb, numc) {
    console.log(numa + numb + numc);
    //return numa + numb + numc
}
//If we try to pass it an array, our function will not work:
let numArr = [10, 2, 30];
console.log(add(numArr)); //'10,2,30undefinedundefined'
//But we can use the spread operator to 'spread' out the values of the array and pass them in as arguments one by one:
console.log(add(...numArr)); //42

let logArgsArray = (...args) => {
    console.log(args);
  };