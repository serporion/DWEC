let notasExamen1 = parseFloat(prompt("Dame una nota de examen"));
let notasExamen2 = parseFloat(prompt("Dame otra nota de otro examen"));
let notasTrabajo1 = parseFloat(prompt("Dame una nota de trabajo"));
let notasTrabajo2 = parseFloat(prompt("Dame otra nota de otro trabajo"));
let notaFinal = ((notasExamen1 + notasExamen2) / 2) * 0.75 + ((notasTrabajo1 + notasTrabajo2) / 2) * 0.25 ;

if (isNaN(notaFinal))  {
    document.write("Me tienes que dar cifras para los datos que se piden");
}else {

    if (notasExamen1 < 4.5 || notasExamen2 < 4.5 || notasTrabajo1 < 4.5 || notasTrabajo2 < 4.5) {
        document.write("<br>Alguna nota es inferior a 4.5");
        document.write("<br>No se puede hacer media");
    }else if ( notaFinal >= 5){

        document.write("<br>La asignatura ha sido aprobada");
        document.write("<br>con un " + notaFinal );
    }else{
        document.write("<br>La asignatura NO ha sido aprobada. Tiene un " + notaFinal );
    }
}
