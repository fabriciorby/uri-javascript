try {
    let input = require('fs').readFileSync('/dev/stdin', 'utf8');
    var lines = input.split('\n');
} catch (err) {
    var lines = ['5', '6', '7', '8'];
}

let getProd = () => parseInt(lines.shift()) * parseInt(lines.shift())

console.log('DIFERENCA = ' + (getProd() - getProd()));