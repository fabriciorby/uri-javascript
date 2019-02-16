try {
    let input = require('fs').readFileSync('/dev/stdin', 'utf8');
    var lines = input.split('\n');
} catch (err) {
    var lines = ['576.43'];
}

const tipoDeNotas = [100.00, 50.00, 20.00, 10.00, 5.00, 2.00];

const tipoDeMoedas = [1.00, 0.50, 0.25, 0.10, 0.05, 0.01];

let totalDinheiro = lines.shift();

console.log('NOTAS:');

tipoDeNotas.map((item, index) => {
    console.log(parseInt(totalDinheiro/item) + ' nota(s) de R$ ' + tipoDeNotas[index].toFixed(2));
    totalDinheiro = (totalDinheiro % item).toFixed(2);
});

console.log('MOEDAS:');

tipoDeMoedas.map((item, index) => {
    console.log(parseInt(totalDinheiro/item) + ' moeda(s) de R$ ' + tipoDeMoedas[index].toFixed(2));
    totalDinheiro = (totalDinheiro % item).toFixed(2);
});