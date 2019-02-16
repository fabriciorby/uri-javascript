try {
    let input = require('fs').readFileSync('/dev/stdin', 'utf8');
    var lines = input.split('\n');
} catch (err) {
    var lines = ['10', '85'];
}

const kmPorLitro = 12;
const tempoGasto = lines.shift();
const kmPorHora = lines.shift();
const distancia = tempoGasto * kmPorHora;
const litrosGastos = distancia / kmPorLitro;

console.log(litrosGastos.toFixed(3));