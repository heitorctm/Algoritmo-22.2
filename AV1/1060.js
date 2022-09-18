var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};
 
var n1 = parseFloat(prompt());
var n2 = parseFloat(prompt());
var n3 = parseFloat(prompt());
var n4 = parseFloat(prompt());
var n5 = parseFloat(prompt());
var n6 = parseFloat(prompt());
var cont = 0;

if(n1>0) {
    cont++;
}
if(n2>0) {
    cont++;
}
if(n3>0) {
    cont++;
}
if(n4>0) {
    cont++;
}
if(n5>0) {
    cont++;
}
if(n6>0) {
    cont++;
}
console.log( cont + " valores positivos");