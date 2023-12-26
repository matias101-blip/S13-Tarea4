"use strict";

function NumPrimo() {
    var num = document.getElementById("num").value;
    var Primo = true;

    if (num === 1) {
        Primo = false;
    } else if (num > 1) {
        for (var i = 2; i < num; i++) {
            if (num % i == 0) {
                Primo = false;
                break;
            }
        }
    }

    if (Primo) {
        document.getElementById("resultado").innerHTML = num + " es un número primo.";
    } else {
        document.getElementById("resultado").innerHTML = num + " no es un número primo.";
    }
}