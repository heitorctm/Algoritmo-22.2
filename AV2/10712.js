var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};

var A = parseInt(prompt());
var B = parseInt(prompt());
var aux = 0;
if(B >= A){
    aux = B;
    B = A;
    A = aux;
}

aux = 0;

for(var i = (B+1); i < A ; i++) {
    if(i%2 !=0) {
        aux+=i;
    }
}
console.log(aux);