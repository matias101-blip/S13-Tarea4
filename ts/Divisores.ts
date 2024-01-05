const input_Divisores = <HTMLInputElement>document.getElementById("input_Div");
const input_Perfect = <HTMLInputElement>document.getElementById("input_Perfect");

declare function Mensaje(mensaje:string): Promise<any>;

function Divisores_f(numero:number) {
  var input: boolean
  if (numero == undefined){
    input = false
    numero = parseInt(input_Divisores.value)
  } else{
    input = true
  }
  var Divisores = [];
  var i:number
  for (i = 0; i < numero;i++){
    if (numero % i == 0){
      Divisores.push(i);
    }
  }

  if (input == false){
    const result = <HTMLSpanElement>document.getElementById("respuesta_div");
    result.innerText = Divisores.join();
    SumaDeDivisoresOPerfecto(Divisores);
  }else {
    return Divisores;
  }
}

function SumaDeDivisoresOPerfecto(Divisores:number[]|undefined){
  var input: boolean
  if (!Divisores){
    var numero = parseInt(input_Perfect.value)
    Divisores = Divisores_f(numero);
    input = true

  }else{
    input = false
  }
  debugger;
  var suma: number = 0
  if (Divisores){
    for (let i = 0; i < Divisores.length;i ++){
      suma = Divisores[i] + suma;
    }
  }

  if (input == false){
    const result = <HTMLSpanElement>document.getElementById("suma_div");
    result.innerText = `${suma}`
  }else{
    var numero = parseInt(input_Perfect.value)
    if (numero == suma){
      Mensaje("El numero es perfecto");
    }else{
      Mensaje("El numero no es perfecto")
    }
  }
}
