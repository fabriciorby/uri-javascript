try {
    let input = require('fs').readFileSync('/dev/stdin', 'utf8');
    var lines = input.split('\n');
} catch (err) {
    var lines = ['5.0', '7.1'];
}

class Prova {
    constructor(nota, peso) {
        this.nota = nota;
        this.peso = peso;
    }
}

let provaA = new Prova(parseFloat(lines.shift()), 3.5);
let provaB = new Prova(parseFloat(lines.shift()), 7.5);

let retornaMediaPonderada = (provaA, provaB) => {
    return ((provaA.nota * provaA.peso + provaB.nota * provaB.peso) / (provaA.peso + provaB.peso)).toFixed(5);
};

console.log('MEDIA = ' + retornaMediaPonderada(provaA, provaB));