try {
    let input = require('fs').readFileSync('/dev/stdin', 'utf8');
    var lines = input.split('\n');
} catch (err) {
    var lines = ['0 0'];
}

const line = lines.shift().split(' ').map(item => parseInt(item));

const menorHora = Math.min.apply(null, line);

let horaInicioRelativo = line[0] - menorHora;
let horaFinalRelativo = line[1] - menorHora;

horaFinalRelativo = horaFinalRelativo === 0 ? 24 : horaFinalRelativo;

let totalHoras = horaFinalRelativo - horaInicioRelativo;

console.log('O JOGO DUROU ' + totalHoras + ' HORA(S)');