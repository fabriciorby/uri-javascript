try {
    let input = require('fs').readFileSync('/dev/stdin', 'utf8');
    var lines = input.split('\n');
} catch (err) {
    var lines = ['6 4 2.1'];
}

const line = lines.shift().split(' ').map(item => parseFloat(item));

let isTriangulo = (listaDePontos) => {
    let somaDosPontos = listaDePontos.reduce((soma, n) => soma + n);
    return listaDePontos.every((element, index) => {
        let subtracaoDosPontos = index === 0 ? somaDosPontos - element - 2*listaDePontos[2] : somaDosPontos - element - 2*listaDePontos[0];
        return (somaDosPontos - element > element && Math.abs(subtracaoDosPontos) < element);
    });
};

if (isTriangulo(line)) {
    console.log('Perimetro = ' + line.reduce((soma, n) => soma + n).toFixed(1));
} else {
    console.log('Area = ' + ((line[0] + line[1]) * line[2] / 2).toFixed(1));
}