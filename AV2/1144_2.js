var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};
 
var A = parseInt(prompt());

var n1 = 1;
var n2 = 1;
var n3 = 1;
var aux = 0;

while(aux < A){
console.log(n1+" "+n2+" "+n3);
n1 = n1;
n2= n2+1;
n3= n3+1;

console.log(n1+" "+n2+" "+n3);
n1 = n1+1;
n2= Math.pow(n1,2);
n3= n2*n1;

aux = aux +1;
}