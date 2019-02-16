try {
    let input = require('fs').readFileSync('/dev/stdin', 'utf8');
    var lines = input.split('\n');
} catch (err) {
    var lines = ['2.00'];
}

console.log("A=" + (3.14159 * Math.pow(parseFloat(lines.shift()), 2)).toFixed(4));