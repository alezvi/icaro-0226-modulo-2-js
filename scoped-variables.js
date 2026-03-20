

// "scope" es el ambito donde viven las variables
let i = 'estoy afuera del for';

// Las variables creadas con "let" pertenecen al ambito donde fueron creadas
for (let i = 0; i < 10; i++) {
    console.log(i);
}

console.log(i);