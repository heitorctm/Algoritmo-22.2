var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};
 
var A = parseInt(prompt());
var B = parseInt(prompt());

aux = 0;

do {
    
    B++;
    
    if(i%2 !== 0) {
        aux+=B;
    }
    
} while( (B+1) < A );

console.log(aux);