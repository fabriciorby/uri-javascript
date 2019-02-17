try {
    let input = require('fs').readFileSync('/dev/stdin', 'utf8');
    var lines = input.split('\n');
} catch (err) {
    var lines = ['2 3'];
}

let menu = {
    1: 4.00,
    2: 4.50,
    3: 5.00,
    4: 2.00,
    5: 1.50
};

const line = lines.shift().split(' ').map(item => parseInt(item));

console.log('Total: R$ ' + (menu[line[0]] * line[1]).toFixed(2));