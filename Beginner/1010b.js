try {
    let input = require('fs').readFileSync('/dev/stdin', 'utf8');
    var lines = input.split('\n');
} catch (err) {
    var lines = ['12 1 5.30', '16 2 5.10'];
}

let total = 0;

lines.forEach(line => {
    let test = line.split(' ');
    total += parseInt(test[1]) * parseFloat(test[2]);
});

console.log('VALOR A PAGAR: R$ ' + total.toFixed(2));