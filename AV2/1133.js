var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};
 
var A = parseInt(prompt());
var B = parseInt(prompt());

var aux;

if (B > A) {
    aux = B;
    B = A;
    A = aux;
}

while(B < A) {  
    B++;
    if(B%5 == 2 || B%5 == 3) {
        console.log(B);
    }
}