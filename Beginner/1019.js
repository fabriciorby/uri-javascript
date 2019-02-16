try {
    let input = require('fs').readFileSync('/dev/stdin', 'utf8');
    var lines = input.split('\n');
} catch (err) {
    var lines = ['556'];
}

let totalSegundos = lines.shift();

const totalHoras = parseInt(totalSegundos / 3600);
totalSegundos = totalSegundos % 3600;

const totalMinutos = parseInt(totalSegundos / 60);
totalSegundos = totalSegundos % 60;

console.log(totalHoras + ':' + totalMinutos + ':' + totalSegundos);