function validar(value){

    var validChars = 'TRWAGMYFPDXBNJZSQVHLCKET';
    var nifRexp = /^[0-9]{8}[TRWAGMYFPDXBNJZSQVHLCKET]$/i;
    var nieRexp = /^[XYZ][0-9]{7}[TRWAGMYFPDXBNJZSQVHLCKET]$/i;
    var str = value.toString().toUpperCase();
  
    if (!nifRexp.test(str) && !nieRexp.test(str)) return false;
  
    var nie = str
        .replace(/^[X]/, '0')
        .replace(/^[Y]/, '1')
        .replace(/^[Z]/, '2');
  
    var letter = str.substr(-1);
    var charIndex = parseInt(nie.substr(0, 8)) % 23;
  
    if (validChars.charAt(charIndex) === letter) return true;
  
    return false;
  }


  //probar sin validar

  var nifRexp = /^[0-9]{8}[TRWAGMYFPDXBNJZSQVHLCKET]$/i;

  var str = "12345678T";

  console.log(validar(str));