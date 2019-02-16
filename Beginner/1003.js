try {
    let input = require('fs').readFileSync('/dev/stdin', 'utf8');
    var lines = input.split('\n');
} catch {
    var lines = ['30', '10'];
}

console.log('SOMA = ' + (parseInt(lines.shift()) + parseInt(lines.shift())));