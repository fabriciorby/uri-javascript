try {
    let input = require('fs').readFileSync('/dev/stdin', 'utf8');
    var lines = input.split('\n');
} catch {
    var lines = ['3', '9'];
}

console.log('PROD = ' + (parseInt(lines.shift()) * parseInt(lines.shift())));