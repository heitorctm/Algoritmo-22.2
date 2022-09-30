var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};

var repete = 1;
while( repete != 0) {
    var [X, Y] = prompt().split(" ");
    X = +X;
    Y = +Y;
   
    if(X > Y) {
        console.log('Decrescente');
    } 
    if(X < Y) {
        console.log('Crescente');
    }
    if(Y == X) {
        repete = 0;
    }
}
