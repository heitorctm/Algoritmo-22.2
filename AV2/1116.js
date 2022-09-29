var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};
 
var A = parseInt(prompt());
var cont = 0;

while(cont< A){
    var [X, Y] =  prompt().split(" ");

    X = parseInt(X);
    Y = parseInt(Y);

    if(Y != 0){
        var conta = (X/Y).toFixed(1);
        console.log(conta);
    } else {
        console.log('divisao impossivel');
    }
    cont++;

}