var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};
 
var A = parseInt(prompt());
var aux = A+10;

if(A%2 != 0) {
    while (A <= aux){
        console.log(A);
        A = A+2;
    }
}
if(A%2 == 0) {
    A= A+1;
    while (A <= aux+1){
        console.log(A);
        A = A+2;
    }
}