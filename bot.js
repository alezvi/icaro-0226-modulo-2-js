
// Saludar al usuario
alert('Hola, soy el Bot y estoy para ayudarte'); // bloquea

// Opciones para continuar
const opciones = 'Elige una opcion para continuar: 1. Contactar a soporte | 2. Quiero comprar';

// Mostrar opciones
const opcion = prompt(opciones); // retorna un string

// Validar que el valor de la opcion sea conocido
if (opcion === '1') {
    alert('Aguarda y te contactaremos con el area de soporte.')
} else if (opcion === '2') {
    alert('Aguarda y te contactaremos con el area comercial.')
} else {
    alert('Vuelve a intentar ingresando una opcion valida.')
}
