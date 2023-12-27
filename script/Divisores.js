"use strict";
const input_Divisores = document.getElementById("input_Div");
const input_Perfect = document.getElementById("input_Perfect");
function Divisores_f(numero) {
    var input;
    if (numero == undefined) {
        input = false;
        numero = parseInt(input_Divisores.value);
    }
    else {
        input = true;
    }
    var Divisores = [];
    var i;
    for (i = 0; i < numero; i++) {
        if (numero % i == 0) {
            Divisores.push(i);
        }
    }
    if (input == false) {
        const result = document.getElementById("respuesta_div");
        result.innerText = Divisores.join();
        SumaDeDivisoresOPerfecto(Divisores);
    }
    else {
        return Divisores;
    }
}
function SumaDeDivisoresOPerfecto(Divisores) {
    var input;
    if (!Divisores) {
        var numero = parseInt(input_Perfect.value);
        Divisores = Divisores_f(numero);
        input = true;
    }
    else {
        input = false;
    }
    debugger;
    var suma = 0;
    if (Divisores) {
        for (let i = 0; i < Divisores.length; i++) {
            suma = Divisores[i] + suma;
        }
    }
    if (input == false) {
        const result = document.getElementById("suma_div");
        result.innerText = `${suma}`;
    }
    else {
        var numero = parseInt(input_Perfect.value);
        if (numero == suma) {
            Mensaje("El numero es perfecto");
        }
        else {
            Mensaje("El numero no es perfecto");
        }
    }
}
