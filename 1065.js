var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};
 
var n1 = parseInt(prompt());
var n2 = parseInt(prompt());
var n3 = parseInt(prompt());
var n4 = parseInt(prompt());
var n5 = parseInt(prompt());

var cont = 0;

if((n1%2) === 0) {
    cont++;
}
if((n2%2) === 0) {
    cont++;
}
if((n3%2) === 0) {
    cont++;
}
if((n4%2) === 0) {
    cont++;
}
if((n5%2) === 0) {
    cont++;
}
console.log(cont + " valores pares")