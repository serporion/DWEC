let a = a => a*a;
document.write(a(5));



function ordenarPalabras (pal1, pal2,pal3) {
    
   

    document.write(pal1,pal2);
    
   
}
ordenarPalabras("jose","jaime");


function bucleInfinito(){
    bucleInfinito();
}

//comprobar cual es el caso base
//siempre recibe un parámetro
//sobre ese parámetro se trabaja para que salga de la recursividad.
//no sale de la llamada, hasta que se cumpla.
//el resto de las líneas, no se ejecutan hasta que terminen las llamadas.
//luego se deshace la pila, va hacia atrás.


function factorial(n) {
    if (n == 1) {
        return 1; //caso base
    }else {
        return n*factorial(n-1);
    }
}

document.write(factorial(0))    