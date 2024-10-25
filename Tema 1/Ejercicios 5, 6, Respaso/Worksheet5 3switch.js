let numero1 = parseFloat(prompt("Dame un número"));
let numero2 = parseFloat(prompt("Dame otro número"));

let operacion = prompt("Dame la operación a realizar. Teclee +,-,*,/");

if (isNaN(numero1) || isNaN(numero2))  {
    document.write("Me tienes que dar cifras para hacer las operaciones");
}else{

    switch (operacion) {
        case "+":
            document.write("<br>La suma es " + (numero1 +  numero2));
            break;
        case "-": 
            document.write("<br>La resta entre el primero dado y el segundo es " + (numero1 - numero2));
            break;
        case "*":
            document.write("<br>El producto de ambos es " + (numero1 * numero2));
            break;
        case "/":
            document.write("<br>La división entre el primero dado y el segundo es " + (numero1 / numero2));
            break;
        default:
            document.write("<br>La operación indicada no existe");
      }
    
}
