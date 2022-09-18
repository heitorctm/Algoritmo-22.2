var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};
 
var [X, Y, Z] =  prompt().split(" ");
var [X1, Y1, Z1] =  prompt().split(" ");

X= +X;
X1= +X1;
Y= +Y;
Y1= +Y1;
Z= +Z;
Z1= +Z1;

var frango = X1 - X;
var bife = Y1 - Y;
var massa = Z1 - Z;
var resposta = 0;

if(frango > 0) {
    resposta += frango;
}
if(bife > 0) {
    resposta += bife;
}
if(massa > 0) {
    resposta += massa;
}

console.log(resposta);
