/**
 * Esta solución no está completa, está en desarrollo
 * Queda como desafío resolverlo para quien quiera hacerlo
 * En el archivo ejercicio-subcadena-sin-repetir.md se encuentra el enunciado
 */

let str = 'pwwkew';

let longitud;

let sub = '';

for (let i = 0; i < str.length; i++) {
    sub += str[i];

    if (sub.length > 1) {
        x += str[c];

        for (let c = 0; c < sub.length; c++) {
            if (!x.includes(c[i])) {
                longitud = sub.length;
            }
        }
    }
    
    console.log(sub)
}