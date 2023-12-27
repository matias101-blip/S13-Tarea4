const input_p = document.getElementById("input_Primo");

function Primo(numero){
  var input
  if (numero == undefined){
    input = false
    var numero = parseInt(input_p.value)
  }else{
    input = true
  }
  debugger
  if (numero > 1) {
  var esPrimo = true;

  for (var i = 2; i < numero; i++) {
    if (numero % i === 0) {
      esPrimo = false;
      break;
    }
  }

  if (input == false){
    if (esPrimo) {
      Mensaje("El número es primo");
    } else {
      Mensaje("El número no es primo");
    }
  }else{
    return esPrimo
  }
} else {
  Mensaje("El número no es primo");
}

}

function PrimosGemelos(){
  debugger
  var numero1 = parseInt(document.getElementById("input_primog1").value)
  var numero2 = parseInt(document.getElementById("input_primog2").value)
  var Primo1 = Primo(numero1)
  var Primo2 = Primo(numero2)
  if (Primo1 == true && Primo2 == true){
    Gemelos = numero1 - numero2
    if (Gemelos == 2 || Gemelos == -2){
      Mensaje("Son primos gemelos")
    }else{
      Mensaje("No son primos gemelos")
    }
  }else{
    Mensaje("Uno de ellos no son primos")
  }
}
