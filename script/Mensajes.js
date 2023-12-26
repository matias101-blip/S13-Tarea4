
function Saludar() {
  Swal.fire(`Hola!!!, Bievenido a este sitio 0/`);
}

function Waring() {
  Swal.fire({
    title: 'Peligro',
    text: 'Porfavor ingrese las notas.',
    icon: 'error',
    confirmButtonText: 'Cool'
  });
}

function Mensaje(mensaje){
  Swal.fire(mensaje);
}
