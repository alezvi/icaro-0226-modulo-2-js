let opcion

do {
    // Mostrar opciones
    opcion = prompt(opciones); // retorna un string

    if (isNaN(opcion)) {
        alert('Ingrese un numero.')
    } else if (parseInt(opcion) === 1) {
        alert('Aguarda y te contactaremos con el area de soporte.')
    } else if (parseInt(opcion) === 2) {
        alert('Aguarda y te contactaremos con el area comercial.')
    } else {
        alert('Vuelve a intentar ingresando una opcion valida.')
    }
} while( opcion != 1 && opcion != 2 );