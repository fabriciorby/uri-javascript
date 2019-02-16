try {
    let input = require('fs').readFileSync('/dev/stdin', 'utf8');
    var lines = input.split('\n');
} catch (err) {
    var lines = ['10', '9'];
}

console.log('X = ' + (parseInt(lines.shift()) + parseInt(lines.shift())));