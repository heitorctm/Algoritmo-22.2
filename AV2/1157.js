var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};
 
var A = parseInt(prompt());
var cont = 1;

while (cont <= Math.abs(A)) {
    if(A%cont == 0) {
        console.log(cont); 
    }
    cont = cont ;
}