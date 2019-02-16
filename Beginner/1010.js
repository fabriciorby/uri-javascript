try {
    let input = require('fs').readFileSync('/dev/stdin', 'utf8');
    var lines = input.split('\n');
} catch (err) {
    var lines = ['12 1 5.30', '16 2 5.10'];
}

let input = lines.shift().split(' ');
let total = input[1] * input[2];

input = lines.shift().split(' ');
total += input[1] * input[2];

console.log('VALOR A PAGAR: R$ ' + total.toFixed(2));