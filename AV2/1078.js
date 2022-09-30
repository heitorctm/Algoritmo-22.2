var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};
 
var A = parseInt(prompt());

for(i=1; i<=10;i++) {
    var tabuada = i*A;
    console.log(i+" x "+A+" = "+tabuada);
}