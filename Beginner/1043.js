try {
    let input = require('fs').readFileSync('/dev/stdin', 'utf8');
    var lines = input.split('\n');
} catch (err) {
    var lines = ['6 4 2.1'];
}

const line = lines.shift().split(' ').map(item => parseFloat(item));

line.sort((a, b) => b - a);
const a = line[0];
const b = line[1];
const c = line[2];

if (a < b + c) {
    console.log('Perimetro = ' + line.reduce((soma, n) => soma + n).toFixed(1));
} else {
    console.log('Area = ' + ((line[0] + line[1]) * line[2] / 2).toFixed(1));
}