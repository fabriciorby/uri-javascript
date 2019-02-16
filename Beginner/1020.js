try {
    let input = require('fs').readFileSync('/dev/stdin', 'utf8');
    var lines = input.split('\n');
} catch (err) {
    var lines = ['400'];
}

let totalDias = lines.shift();

const totalAnos = parseInt(totalDias / 365);
totalDias = totalDias % 365;

const totalMeses = parseInt(totalDias / 30);
totalDias = totalDias % 30;

console.log(totalAnos + ' ano(s)');
console.log(totalMeses + ' mes(es)');
console.log(totalDias + ' dia(s)');