window.onload = () => {
    
    //Sustituimos ésta sentencia por la siguiente.
    //let numerosCalculadora = document.querySelectorAll('td');
    let tablaPincho = document.getElementById('tabla');

    let operacion ="";
    
    let resultado = {
        valor:""
    }
    
    //Sustituimos éstas dos sentencias por la siguiente.
        //numerosCalculadora.forEach(elementTd => {
        //elementTd.addEventListener('click', (e) => {

            tablaPincho.addEventListener('click', (e) => {
                            console.log(e.target.id);
                if(comprobarOperandos(e.target.id)){
                    e.target.style.backgroundColor = "blue";

                    if ((resultado.valor == "") && (operacion == "")){
                        resultado.valor = document.getElementById("caja").innerText;
                        document.getElementById("caja").innerText = "";
                        operacion = e.target.id;                        
                        document.getElementById("titH1").innerText = "Dame el siguiente numero";
                
                    }else if ((resultado.valor == "") && (operacion != "")){
                        alert("Dale a la C para operar de nuevo");
                        //operacion = "";
                        document.getElementById("=").style.background = "white";
                        e.target.style.backgroundColor = "white";
                        document.getElementById("caja").innerText = "";
                        document.getElementById("titH1").innerText = "Dame el primer número";

                    }

                    else if ((resultado.valor != "") && operacion !=""){

                        let nuevo = document.getElementById("caja").innerText;

                        resultado.valor = operar(resultado.valor,operacion,nuevo);                       
                        document.getElementById("caja").innerText = "";

                    }
                    else {
                        //operacion = e.target.id;
                        //e.target.style.backgroundColor = "green";
                        //document.getElementById("titH1").innerText = "Dame el segundo numero";
                    }
            
                }else if (e.target.id == "=" || e.target.id == "C") {

                    if (e.target.innerText === "C") {

                        //Sustituimos ésta sentencia por la siguiente.
                        //numerosCalculadora.forEach ( elemento => elemento.style.backgroundColor = "white");
                        document.getElementById("=").style.backgroundColor = "white";

                        //Añadimos ésta sentencia porque hemos eliminado numerosCalculadora.forEach y 
                        //es otro elemento diferente al del click.
                        if (operacion!="") {
                            document.getElementById(""+operacion+"").style.backgroundColor = "white";
                        }

                        document.getElementById("C").style.backgroundColor = "green";
                        document.getElementById("titH1").innerText = "Dame el primer número";
                        document.getElementById("caja").innerText = "";
                        resultado.valor="";                        
                        operacion="";
                    }

                    if (e.target.id === "=") {

                        //Sustituimos ésta sentencia por la siguiente.
                        //numerosCalculadora.forEach ( elemento => elemento.style.backgroundColor = "white");
                        document.getElementById("C").style.backgroundColor = "green";

                        if (resultado.valor == ""){
                            alert("Dame un número");
                            e.target.style.backgroundColor = "white";

                        }else{
                        
                            let numero2 = document.getElementById("caja").innerText;
                            document.getElementById("caja").innerText = "";                    
                            document.getElementById("=").style.backgroundColor = "red";
                            document.getElementById("titH1").innerText = "RESULTADO";
                            document.getElementById("caja").innerText = operar(resultado.valor,operacion,numero2);
                            resultado.valor="";

                        }

                    }

                }else {
                    
                    document.getElementById("caja").innerText += e.target.id;

                }
        });

    //});

}


    function comprobarOperandos(operando){        
        const arrayOperaciones = ["+", "-", "x", "/"];

         if (arrayOperaciones.find(element => element === operando)){
            return true;             
        }

        return false;
    }



    function operar(numero1,operacion,numero2){

        numero1 = parseFloat(numero1);
        numero2 = parseFloat(numero2);

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
    
 