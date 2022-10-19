var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};
 

var testes = parseInt(prompt());

var a = 1
var b = 1
var c = 1

for(i=0;i<testes;i++){
    console.log(a+' '+b+' '+c);
    a++
    b=a*a
    c=a*a*a
}