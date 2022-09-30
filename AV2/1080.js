var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};

var A=[];

for(i=0;i<100;i++) {
    A.push(parseFloat(prompt()));
}
const valorMax = A.reduce(function(anterior, atual) { 
    return anterior > atual ? anterior : atual; 
});
console.log(valorMax);

console.log(A.indexOf(valorMax,0)+1);