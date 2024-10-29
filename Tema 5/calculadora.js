window.onload = () => {
    

    let operador1 = document.querySelectorAll('td');

    console.log(operador1.length);

    let numero1=0;
    let numero2=0;
    let operacion="";
    
   

    operador1.forEach(elementTd => {
        
        elementTd.addEventListener('click', (e) => {
            if (numero1==0){
                numero1 = e.target.innerText;
                document.getElementById("titH1").innerText = "Dame la operacion";
            }else if (operacion===""){
                operacion = e.target.innerText;
                document.getElementById("titH1").innerText = "Dame el segundo numero";
            }else if (numero2==0){
                numero2 = e.target.innerText;
                let resultado = operar(numero1,operacion,numero2);
                console.log(resultado);
                document.getElementById("titH1").innerText = "RESULTADO";
                document.getElementById("caja").innerText = resultado;
            }else if (e.target.innerText === "C"){
                document.getElementById("titH1").innerText = "Dame el primer número";
                document.getElementById("caja").innerText = "";
                numero1=0;
                numero2=0;
                operacion="";
            }


        });



    });

}
    function operar(numero1,operacion,numero2){

        numero1 = parseInt(numero1);
        numero2 = parseInt(numero2);

        switch(operacion){
            case "+":
                return numero1+numero2;
            case "-":
                return numero1-numero2;
            case "x":
                return numero1*numero2;
            case "/":
                return numero1/numero2;
        }
    
    }
    
   /*
    function recibeClick(click){
        console.log(click.target.innerText);
    }
    */
    

