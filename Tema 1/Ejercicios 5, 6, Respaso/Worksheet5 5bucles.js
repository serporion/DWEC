let numeros; 
let total = 0;
let i = 1;


    while (i<10) {
        
        numeros = parseInt(prompt("Dame 10 numeros y te los sumo. Dame el numero " +i ));
        total += numeros;
        i++;
    }

console.log(total);
document.write("El total es " + total); 
document.write("<br>Programa finalizado"); 