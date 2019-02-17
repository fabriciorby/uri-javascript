try {
    let input = require('fs').readFileSync('/dev/stdin', 'utf8');
    var lines = input.split('\n');
} catch (err) {
    var lines = ['36 4'];
}

const line = lines.shift().split(' ').map(item => parseFloat(item));

console.log(line[1]%line[0] === 0 || line[0]%line[1] === 0 ? 'Sao Multiplos' : 'Nao sao Multiplos');