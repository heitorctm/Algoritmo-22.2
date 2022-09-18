var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};

var salario = parseFloat(prompt());
var imposto8 = 0;
var imposto18 = 0;
var imposto28 = 0;
if(salario <= 2000 && salario > 0){
    console.log("Isento");
}
if(salario > 2000 && salario <= 3000){
    imposto8 = ((salario-2000)*0.08);
    console.log("R$ "+(imposto8*1).toFixed(2));
}
if(salario > 3000 && salario <= 4500) {
    imposto18 = ((salario - 3000)*0.18);
    imposto8 = (999.99*0.08);
    console.log("R$ "+(imposto8*1+imposto18*1).toFixed(2));
}
if(salario >4500) {
    imposto28 = ((salario - 4500)*0.28);
    imposto18 = (1499.99*0.18);
    imposto8 = (999.99*0.08);
    console.log("R$ "+(imposto8*1+imposto18*1+imposto28*1).toFixed(2));
}