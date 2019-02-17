try {
    let input = require('fs').readFileSync('/dev/stdin', 'utf8');
    var lines = input.split('\n');
} catch (err) {
    var lines = ['6.4 8.2 8.2 7.4 9.1'];
}
let notas = lines.shift().split(' ').map(item => parseFloat(item));
let somaTotal = notas.reduce((soma, n) => soma + n);
let maiorNota = notas.reduce((maior, n) => maior > n ? maior : n);
let menorNota = notas.reduce((menor, n) => menor < n ? menor : n);
let notaFinal = somaTotal - maiorNota - menorNota;
console.log(notaFinal.toFixed(1));