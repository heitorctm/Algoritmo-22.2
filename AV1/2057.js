var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};
 
var [S, T, F] =  prompt().split(" ");  

S = parseInt(S);
T = parseInt(T);
F = parseInt(F);
var hora = S + T + F;

if(hora < 0){
    hora = hora + 24;
}
if(hora > 23){
    hora = hora - 24;
}
console.log(hora);