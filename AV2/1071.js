var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};
 
var A = parseInt(prompt());
var B = parseInt(prompt());


while(B<A-1) {
    if(B%2 == 0){
        aux = 0;
        aux = aux + B + 1;
    }
    B=B+1;
}
console.log(aux);