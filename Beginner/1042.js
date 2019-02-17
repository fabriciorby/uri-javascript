try {
    let input = require('fs').readFileSync('/dev/stdin', 'utf8');
    var lines = input.split('\n');
} catch (err) {
    var lines = ['7 21 -14'];
}

const line = lines.shift().split(' ').map(item => parseInt(item));
const lineSort = line.slice().sort((a,b) => a - b);

lineSort.forEach(item => console.log(item));
console.log();
line.forEach(item => console.log(item));