let current = 2026;

const year = prompt('Año de inicio');

for (let i = year; i <= current; i++) {
    if (i % 4 != 0) {
        continue;
    }

    console.log(i);
}