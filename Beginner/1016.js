try {
    let input = require('fs').readFileSync('/dev/stdin', 'utf8');
    var lines = input.split('\n');
} catch (err) {
    var lines = ['30'];
}

const kmPorMinuto = 2;

console.log(lines.shift() * kmPorMinuto + ' minutos');