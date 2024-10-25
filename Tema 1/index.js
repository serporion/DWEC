document.write("Este es un un archivo escrito en JS");
document.write("");
document.write("Este es un un archivo escrito en JS otra vez");


function factorial(n) {
    if (n == 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}
let a = factorial(4);
console.log(factorial(4));

document.write("El factorial de 8 es: " + a);

function tabla(n) {
    document.write("La tabla del " + n  );
    document.write("<p></p>");
    for (let i = 0; i <=10; i++) {
        document.write(n + " * " + i + " = " + n*i);
        document.write("<p></p>");
    }
}

tabla(4)

function factorial(){
    
}