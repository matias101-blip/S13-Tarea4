"use strict";
var contenedores = document.querySelectorAll(".click");
contenedores.forEach(function (contenedor) {
    contenedor.addEventListener('click', function () {
        var value = contenedor.getAttribute('data-value');
        window.location.href = "".concat(value);
    });
});
