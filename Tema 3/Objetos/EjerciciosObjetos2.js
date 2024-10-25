
/*

TASK 2

Write a Car class whose constructor initializes model and milesPerGallon from arguments.
All instances built with Car:
should initialize with a tank at 0
should initialize with an odometer at 0
Give cars the ability to get fueled with a .fill(gallons) method. Add the gallons to tank.
Give cars ability to .drive(distance). The distance driven:
Should cause the odometer to go up.
Should cause the the tank to go down taking milesPerGallon into account.
A car which runs out of fuel while driving can't drive any more distance:
The drive method should return a string "I ran out of fuel at x miles!" x being odometer.

*/

class Car {

    #tanque = 0;
    #cuentaKilometros = 0;

    #km_totales =0;
    

    constructor(modelo, km_l) {
        this.modelo = modelo;
        //this.consumo = consumo/100;
        this.km_l = km_l;

        
    }

    fill(litros){


            if (this.#tanque + litros > 50){
                throw new Exception(`No puede llenar más el deposito más de su capacidad. El tanque tiene ${this.#tanque}`);
            }else {
                this.#tanque += litros;
            }

            this.#km_totales = this.#tanque*this.km_l;
        
    }
    
    drive(km){

        let combustibleNecesario = km / this.km_l;

        if ((this.#tanque - combustibleNecesario)<0 ){
            
            
            if ((this.#cuentaKilometros - this.#km_totales) == 0){
                clearInterval(interval);
                throw new Error(this.toString());
            }
                
            throw new Error(`No podrías recorrer ${km}. Solo puedes recorrer con tu depósito ${this.#tanque*this.km_l} km.`);
           


        }else
        {
            this.#cuentaKilometros += km;
            this.#tanque -= combustibleNecesario;
            this.datosCoche();
        }

    }

    datosCoche(){
        document.write(`Mi cuentakilometro muestra ${this.#cuentaKilometros}, Mi tanque tiene ${(this.#tanque).toFixed(2)}. Puedo recorrer ${(this.#tanque*this.km_l).toFixed(2)} km.<br>`);
    }

    toString(){
        return `I ran out of fuel with ${this.#cuentaKilometros}.`;
        }

}



let car1 = new Car("Kar1", 13);




try{
    car1.datosCoche();
    document.write("<br>");
    car1.fill(25);
    car1.datosCoche();
    document.write("<br>");
    car1.drive(150);
    document.write("<br>");
    car1.drive(180);
    //car1.drive();

    function recorrer(){
        return car1.drive(1);
    }

    var interval = setInterval(recorrer, 1000);
    
}
catch(e){
    document.write(e.message);
}




