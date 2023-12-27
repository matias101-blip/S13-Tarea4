function concatenar(){
    var cadena1
    var cadena2
    cadena1 = document.getElementById("cadena1").value
    cadena2 = document.getElementById("cadena2").value
    var resultado = cadena1 + cadena2;
    Mensaje(resultado);
}

//Arreglar este error con arreglos
function buscar_subcadena(cadena_b, subcadenas){
    var input
    if (cadena_b == undefined){
        cadena_b = document.getElementById("cadena_b").value
        var subcadenas = document.getElementById("subcadenas").value
        input = false
    }else{
        input = true
    }
    var pos;
    for (let i = 0; i < cadena_b.length; i++){
        caracter = cadena_b[i]
        if (caracter == subcadenas[0]) {
            pos = i
            var i2 = i
            for (let i3 = 1; i3 < subcadenas.length; i3 ++) {
                i2 = i2 + 1
                if (cadena_b[i2] != subcadenas[i3]){
                    pos = 0
                }
            }
        }
    }
    if (input == false){
        alert(pos);
    }else{
        return pos;
    }
}

function Insertar(){
    var input = document.getElementById("cadena_i");
    var insertar = document.getElementById("insertar");
    var cadena = input.value;
    insertar.innerText = cadena;

}

function Eliminar(){
    var input_c = document.getElementById("cadena_e");
    var input_sc = document.getElementById("subcadena_e");
    var Nueva_cadena = ""
    var cadena_b = input_c.value
    var subcadena = input_sc.value
    var pos = buscar_subcadena(cadena_b, subcadena);

    for (let i = 0; i < pos; i++){
        Nueva_cadena = Nueva_cadena + cadena_b[i]
    }
    for (let i = pos + subcadena.length; i < cadena_b.length; i++){
        Nueva_cadena = Nueva_cadena + cadena_b[i]
    }

    alert(`Esta es la nueva cadena ${Nueva_cadena}`);

}

var items = [];


function agregarElemento() {
  var inputElement = document.getElementById('input_ac');
  var inputValue = inputElement.value.trim();

  if (inputValue !== '') {

    items.push(inputValue);


    inputElement.value = '';


    actualizarLista();
  }
}

function convertirCadena() {
  debugger
  var cadenaC = items.join(', ');
  document.getElementById('cadena_c').textContent = cadenaC;
}


function actualizarLista() {
  var listaElement = document.getElementById('lista');
  listaElement.innerHTML = '';


  items.forEach(function (item) {
    var liElement = document.createElement('li');
    liElement.textContent = item;
    listaElement.appendChild(liElement);
  });
}
