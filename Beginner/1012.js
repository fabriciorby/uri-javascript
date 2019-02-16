try {
    let input = require('fs').readFileSync('/dev/stdin', 'utf8');
    var lines = input.split('\n');
} catch (err) {
    var lines = ['12.7 10.4 15.2'];
}

lines = lines.shift().split(' ');

let a = parseFloat(lines.shift());
let b = parseFloat(lines.shift());
let c = parseFloat(lines.shift());

let getAreaTriangulo = (base, altura) => {
    return base*altura/2;
};

let getAreaCirculo = raio => {
    return 3.14159*raio*raio;
};

let getAreaTrapezio = (baseA, baseB, altura) => {
    return (baseA + baseB)*altura/2;
};

let getAreaQuadrado = (lado) => {
    return lado*lado;
};

let getAreaRetangulo = (ladoA, ladoB) => {
    return ladoA*ladoB;
};

console.log('TRIANGULO: ' + getAreaTriangulo(a, c).toFixed(3));
console.log('CIRCULO: ' + getAreaCirculo(c).toFixed(3));
console.log('TRAPEZIO: ' + getAreaTrapezio(a, b, c).toFixed(3));
console.log('QUADRADO: ' + getAreaQuadrado(b).toFixed(3));
console.log('RETANGULO: ' + getAreaRetangulo(a, b).toFixed(3));