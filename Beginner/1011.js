try {
    let input = require('fs').readFileSync('/dev/stdin', 'utf8');
    var lines = input.split('\n');
} catch (err) {
    var lines = ['15'];
}

console.log('VOLUME = ' + (4/3 * 3.14159 * Math.pow(lines.shift(), 3)).toFixed(3));