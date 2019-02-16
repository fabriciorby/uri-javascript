try {
    let input = require('fs').readFileSync('/dev/stdin', 'utf8');
    var lines = input.split('\n');
} catch (err) {
    var lines = ['500', '35.0'];
}

console.log((lines.shift()/lines.shift()).toFixed(3) + ' km/l');