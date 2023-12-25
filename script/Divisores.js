"use strict";
const input_Divisores = document.getElementById("input_Div");
const input_Perfect = document.getElementById("input_Perfect");
function Divisores(numero) {
    var input;
    if (numero == undefined) {
        input = false;
    }
    else {
        input = true;
        const numero = parseInt(input_Divisores.value);
    }
    var Divisores = [];
    var i;
    for (i = 0; i < numero; i++) {
        if (numero % i == 0) {
            Divisores.push(i);
        }
    }
    console.log(Divisores);
}
