🧠 Ejercicio: Subcadenas únicas más largas
Dado un string, debes encontrar la longitud de la subcadena más larga que no tenga caracteres repetidos.

📌 Ejemplo:
"abcabcbb"
La subcadena más larga sin repetir letras es "abc", que tiene longitud 3.

"bbbbb"
La subcadena más larga es "b", longitud 1.

"pwwkew"
La subcadena más larga es "wke", longitud 3.

🎯 Tu tarea:
Escribe una función que:

Reciba un string.

Devuelva un número (la longitud de la subcadena más larga sin caracteres repetidos).

⚡ Condiciones para subir el nivel:
No puedes usar librerías externas.

Intenta no usar estructuras demasiado avanzadas (como objetos si aún no los viste).

Puedes usar arrays y métodos como includes, slice, push, etc.

Trata de hacerlo de la forma más eficiente posible (no solo que funcione, sino que no sea innecesariamente lento).

Si te atascas, dime y te doy pistas progresivas (sin spoilearte la solución 😉).



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

Asi estaria bien ?

Vas bien intentando construir la subcadena paso a paso 👍, pero ese código tiene varios problemas importantes que te van a impedir que funcione correctamente. Te los explico sin darte la solución completa:

❌ Problemas en tu código
Variable x no está definida

x += str[c];
Nunca declaraste x, así que eso va a romper el programa.

Uso incorrecto de índices

if (!x.includes(c[i]))
c es un número (el índice del for), no un array ni string.

c[i] no tiene sentido aquí.

Probablemente querías comparar caracteres, pero estás mezclando índices.

El bucle interno está mal planteado

for (let c = 0; c < sub.length; c++)
La idea del ejercicio es detectar si hay caracteres repetidos en la subcadena, pero tu lógica no está verificando correctamente eso.

Nunca reinicias la subcadena

sub += str[i];
Siempre vas agregando letras, pero no estás eliminando caracteres cuando hay repetidos, que es clave en este problema.

longitud no guarda el máximo

longitud = sub.length;
Estás sobrescribiendo el valor sin comparar si es el mayor encontrado hasta ahora.

🧠 Pista importante (sin spoilear)
En este ejercicio necesitas pensar algo así:

Vas recorriendo el string.

Mantienes una subcadena actual sin repetidos.

Si aparece un carácter repetido:

Debes recortar la subcadena hasta que deje de repetirse.

En cada paso, guardas la longitud máxima encontrada.

🔍 Mini pista técnica
Un patrón útil es:

Usar un array como “ventana” (subcadena actual)

Usar .includes() para saber si un carácter ya está dentro

Si está repetido → ir quitando desde el inicio

Si quieres, en el siguiente mensaje puedo:

corregirte tu código paso a paso, o

darte una versión más cercana a lo que intentaste (sin hacerlo perfecto de una)

¿Prefieres pista extra o corrección guiada?