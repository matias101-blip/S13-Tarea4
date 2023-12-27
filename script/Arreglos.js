function encontrarMayor() {
  const numerosString = document.getElementById('numeros').value;
  const numeros = numerosString.split(',').map(Number);

  if (numeros.length === 0) {
    alert('Ingrese al menos un número.');
    return;
  }

  const mayor = Math.max(...numeros);
  alert('El número mayor es: ' + mayor);
}

function buscarElemento() {
  const numeroBuscado = parseInt(document.getElementById('buscarNumero').value, 10);

  if (isNaN(numeroBuscado)) {
    alert('Ingrese un número válido.');
    return;
  }

  const numerosString = document.getElementById('numeros').value;
  const numeros = numerosString.split(',').map(Number);

  const encontrado = numeros.includes(numeroBuscado);

  if (encontrado) {
    alert('Número encontrado en el arreglo.');
  } else {
    alert('Número no encontrado en el arreglo.');
  }
}

function insertarElemento() {
  const numeroInsertar = parseInt(document.getElementById('insertarNumero').value, 10);

  if (isNaN(numeroInsertar)) {
    alert('Ingrese un número válido.');
    return;
  }

  const numerosString = document.getElementById('numeros').value;
  const numeros = numerosString.split(',').map(Number);

  numeros.push(numeroInsertar);

  document.getElementById('numeros').value = numeros.join(', ');
}

function eliminarElemento() {
  const numeroEliminar = parseInt(document.getElementById('eliminarNumero').value, 10);

  if (isNaN(numeroEliminar)) {
    alert('Ingrese un número válido.');
    return;
  }

  const numerosString = document.getElementById('numeros').value;
  const numeros = numerosString.split(',').map(Number);

  const index = numeros.indexOf(numeroEliminar);

  if (index !== -1) {
    numeros.splice(index, 1);
    document.getElementById('numeros').value = numeros.join(', ');
    alert('Número eliminado del arreglo.');
  } else {
    alert('Número no encontrado en el arreglo.');
  }
}

function convertirCadenaAArreglo() {
  const cadena = document.getElementById('cadenaConvertir').value;
  const delimitador = document.getElementById('delimitador').value;

  if (cadena === '' || delimitador === '') {
    alert('Ingrese una cadena y un delimitador.');
    return;
  }

  const arreglo = cadena.split(delimitador);
  alert('Cadena convertida a arreglo: ' + arreglo);
}
