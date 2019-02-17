try {
    let input = require('fs').readFileSync('/dev/stdin', 'utf8');
    var lines = input.split('\n');
} catch (err) {
    var lines = ['2.0 4.0 7.5 8.0', '6.4'];
    //var lines = ['2.0 6.5 4.0 9.0'];
    //var lines = ['9.0 4.0 8.5 9.0'];
}

const notas = lines.shift().split(' ').map(item => parseFloat(item));

class Prova {
    constructor(nota, peso) {
        this.nota = nota;
        this.peso = peso;
    }
}

let provas = [];

provas.push(new Prova(parseFloat(notas.shift()), 2));
provas.push(new Prova(parseFloat(notas.shift()), 3));
provas.push(new Prova(parseFloat(notas.shift()), 4));
provas.push(new Prova(parseFloat(notas.shift()), 1));

let retornaMediaPonderada = (provas) => {
    let numerador = provas.reduce((total, item) => (item.nota * item.peso) + total, 0)
    let denominador = provas.reduce((total, item) => (item.peso + total), 0);
    return (numerador / denominador);
};

let media = retornaMediaPonderada(provas);

console.log('Media: ' + media.toFixed(1));
if (media >= 7)
    console.log('Aluno aprovado.');
else if (media < 5)
    console.log('Aluno reprovado.');
else {
    let notaExame = parseFloat(lines.shift());
    media = (media + notaExame) / 2;
    console.log('Aluno em exame.');
    console.log('Nota do exame: ' + notaExame.toFixed(1));
    if (media < 5)
        console.log('Aluno reprovado.');
    else
        console.log('Aluno aprovado.');
    console.log('Media final: ' + media.toFixed(1));
}