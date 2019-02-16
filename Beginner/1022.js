try {
    let input = require('fs').readFileSync('/dev/stdin', 'utf8');
    var lines = input.split('\n');
} catch (err) {
    var lines = ['2 3 2 6'];
}

const arrayNumeros = lines.shift().split(' ');
const A = arrayNumeros[0];
const B = arrayNumeros[1];
const C = arrayNumeros[2];
const D = arrayNumeros[3];

if (B > C && D > A && (C + D) > (A + B) && C > 0 && D > 0 && A % 2 === 0)
    console.log('Valores aceitos');
else
    console.log('Valores nao aceitos');

// se B for maior do que C
// se D for maior do que A
// a soma de C com D for maior que a soma de A e B
// se C e D forem positivos 
// se a variável A for par escrever a mensagem "Valores aceitos", senão escrever "Valores nao aceitos".