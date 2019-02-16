try {
    let input = require('fs').readFileSync('/dev/stdin', 'utf8');
    var lines = input.split('\n');
} catch (err) {
    var lines = ['7 14 106'];
}

lines = lines.shift().split(' ');
lines = lines.map(item => parseInt(item));

let retornaMaior = (a, b) => {
    return (a + b + Math.abs(a - b)) / 2;
};

console.log(lines.reduce((maior, item) => retornaMaior(maior, item)) + ' eh o maior');