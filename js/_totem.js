// Que es lo primero que ve el usuario cuando llega a la "pantalla de inicio"?
// - logo = identidad del negocio o servicio
// - saludo = bienvenida, tip de ayuda para el paso actual
// - accion = tocar la pantalla para continuar (touch / click)

// parecido a un modulo
function pantallaDeInicio() {

    function crearLogo() {
        return '<img src="logo.png" />';
    }

    function crearSaludo() {
        return '<p>Bienvenido a nuestra sucursal. Toque la pantalla para comenzar.</p>';
    }

    function mostrar() {
        const logo = crearLogo()
        const saludo = crearSaludo()

        return `
            <div>
                <div>${logo}</div>
                <div>${saludo}</div>
            </div>
        `;
    }

    return {
        mostrar
    }
}

/** 
Despues de tocar la pantalla
- entrada = numero de documento
    - usabilidad y accesibilidad = teclado numerico
    - inicia el proceso = boton de enviar
- proceso
    - ir a la base de datos a buscar si existe el DNI
    - si existe
        - a partir de ahora lo saludo con el nombre
        - le doy preferencia en el turno
    - si no existe
        - le doy turno según disponibilidad
- salida = ir al siguiente paso (redireccion)
*/

function pantallaDeDocumento() {
    let documento = '';

    function ingresarNumero(n) {
        documento += n;
    }

    function mostrar() {
        return `${documento}`
    }

    return {
        mostrar,
        ingresarNumero,
    }
}

pantallaDeInicio().mostrar()

let documento = pantallaDeDocumento()

documento.ingresarNumero(3);
documento.ingresarNumero(4);
documento.ingresarNumero(9);
documento.ingresarNumero(1);
documento.ingresarNumero(0);

documento.mostrar();