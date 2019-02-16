try {
    var input = require('fs').readFileSync('/dev/stdin', 'utf8');
    var lines = input.split('\n');
}
catch (err) {
    var lines = ['JOAO', '500.00', '1230.30'];
}

class Seller {

    constructor(name, fixedSalary, soldValue) {
        this.name = name;
        this.fixedSalary = fixedSalary;
        this.soldValue = soldValue;
        this.totalSalary = fixedSalary + soldValue * 0.15;
    }

    getTotalSalaryInfo() {
        return 'TOTAL = R$ ' + this.totalSalary.toFixed(2);
    }
}

let seller = new Seller(lines.shift(), parseFloat(lines.shift()), parseFloat(lines.shift()));

console.log(seller.getTotalSalaryInfo());