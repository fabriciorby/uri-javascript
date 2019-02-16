try {
    let input = require('fs').readFileSync('/dev/stdin', 'utf8');
    var lines = input.split('\n');
} catch (err) {
    var lines = ['5.0', '6.0', '7.0'];
}

class Prova {
    constructor(nota, peso) {
        this.nota = nota;
        this.peso = peso;
    }
}

let provas = [];

provas.push(new Prova(parseFloat(lines.shift()), 2));
provas.push(new Prova(parseFloat(lines.shift()), 3));
provas.push(new Prova(parseFloat(lines.shift()), 5));

let retornaMediaPonderada = (provas) => {
    let numerador = provas.reduce((total, item) => (item.nota * item.peso) + total, 0)
    let denominador = provas.reduce((total, item) => (item.peso + total), 0);
    return (numerador / denominador).toFixed(1);
};

console.log('MEDIA = ' + retornaMediaPonderada(provas));