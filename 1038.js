var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};
 
var [codigo, qtde] =  prompt().split(" "); 

codigo = parseInt(codigo);
qtde = parseInt(qtde);
var resposta = 0;
// 1 cachorro 4.00
// 2 salada 4.5
// 3 bacon 5.00
// 4 torrada 2.0
// 5 refri 1.5

if(codigo == 1) {
    resposta = (qtde*4);
}
if(codigo == 2) {
    resposta = (qtde*4.5);
}
if(codigo == 3) {
    resposta = (qtde*5);
}
if(codigo == 4) {
    resposta = (qtde*2);
}
if(codigo == 5) {
    resposta = (qtde*1.5);
}
console.log("Total: R$ "+resposta.toFixed(2));