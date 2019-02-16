try {
    let input = require('fs').readFileSync('/dev/stdin', 'utf8');
    var lines = input.split('\n');
} catch (err) {
    var lines = ['1.0 7.0', '5.0 9.0'];
}

class Point {
    constructor (x, y) {
        this.x = x;
        this.y = y;
    }

    returnDistanceTo(point) {
        return Math.sqrt(Math.pow(point.x - this.x, 2) + Math.pow(point.y - this.y, 2));
    }
}

let getCoordList = () => {
    let line = lines.shift().split(' ');
        return line.map(item => parseFloat(item));
}

let line = getCoordList();
let pointA = new Point(line[0], line[1]);

line = getCoordList();
let pointB = new Point(line[0], line[1]);

console.log(pointA.returnDistanceTo(pointB).toFixed(4));