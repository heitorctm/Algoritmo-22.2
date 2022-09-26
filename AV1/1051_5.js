var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};

var salario = parseFloat(prompt());

function calc(salario) {

    (salario > 4500) && console.log('R$ ' + ((999.99*0.08)+(1499.99*0.18)+((salario - 4500)*0.28)).toFixed(2));
    (salario > 3000 && salario < 4500) && console.log('R$ '+ ((999.99*0.08)+((salario - 3000)*0.18)).toFixed(2));
    (salario > 2000 && salario < 3000) && console.log('R$ ' + ((salario-2000)*0.08).toFixed(2));
    (salario <= 2000) && console.log("Isento");

}

calc(salario);