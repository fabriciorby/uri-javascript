try {
    let input = require('fs').readFileSync('/dev/stdin', 'utf8');
    var lines = input.split('\n');
} catch (err) {
    var lines = ['6.0 6.0 10.0'];
}

const line = lines.shift().split(' ').map(item => parseFloat(item));
line.sort((a, b) => b - a);
const a = line[0];
const b = line[1];
const c = line[2];

if (a >= b + c) {
    console.log('NAO FORMA TRIANGULO');
    return;
}

switch (true) {
    case a * a === b * b + c * c:
        console.log('TRIANGULO RETANGULO');
        break;
    case a * a > b * b + c * c:
        console.log('TRIANGULO OBTUSANGULO');
        break;
    case a * a < b * b + c * c:
        console.log('TRIANGULO ACUTANGULO');
        break;
}

switch (true) {
    case a === b && b === c && a === c:
        console.log('TRIANGULO EQUILATERO');
        break;
    case a === b || b === c || a === c:
        console.log('TRIANGULO ISOSCELES');
        break;
}