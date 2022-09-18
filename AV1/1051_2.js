var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};

var salario = parseFloat(prompt());

if(salario > 4500) {
    var imposto28 = ((salario - 4500)*0.28);
    var imposto18 = (1499.99*0.18);
    var imposto8 = (999.99*0.08);
    console.log("R$ "+(imposto8+imposto18+imposto28).toFixed(2));
} else {
if(salario > 3000) {
    var imposto18 = ((salario - 3000)*0.18);
    var imposto8 = (999.99*0.08);
    console.log("R$ "+(imposto8+imposto18).toFixed(2));
} else {
if(salario > 2000){
    var imposto8 = ((salario-2000)*0.08);
    console.log("R$ "+(imposto8).toFixed(2));
} else {
    console.log("Isento");
}}}