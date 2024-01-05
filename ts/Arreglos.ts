
//Funcion que busca elementos en un arreglo
function buscarArreglo(arreglo: any[], elemento: any): {encontrado: boolean, pos:any} {
  debugger;
  var encontrado: boolean = false;
  var pos;
  for (let i = 0; i < arreglo.length; i++) {
    var objetivo = arreglo[i]
    if (objetivo === elemento) {
      pos = i
    }
  }
  if (pos == undefined){
    console.log("No se encontro en el arreglo")
  }else{
    encontrado = true;
    console.log(`El elemento si se encuantra en el arreglo y esta en la ${pos}`)
  }
  return {
    encontrado: encontrado,
    pos: pos
  };
}

//Funcion que elimina elementos en un arreglo
function Eliminar(arreglo:any[],elemento:any){
  var nuevoArreglo = []
  const {encontrado, pos} = buscarArreglo(arreglo, elemento)
  if (encontrado){
    for (let i = 0; i<arreglo.length; i++){
      if (arreglo[i] != elemento){
        nuevoArreglo.push(arreglo[i])
      }
    }
  console.log(`El elemento de la pocision ${pos} fue eliminado`);
  return nuevoArreglo;
  }else{
    console.log("El elemento no se encuantra en el arreglo")
  }
}

function Insertar(arreglo:any[], elemento:any){
  arreglo.push(elemento)
  console.log('El elemento fue insertado')
}
