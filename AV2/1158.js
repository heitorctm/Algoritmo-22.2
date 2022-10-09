var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};
 
var A = parseInt(prompt());
var soma;
for(var i = 0; i < A; i++) {
    soma = 0;
    var [x, y] =  prompt().split(" ");
    x = parseInt(x);
    y = parseInt(y);
    for(var j = 0; j < y; j++) {

        if(x%2 != 0) {
        soma+=x;
        x+=2;
        } else {
            x++;
            j=j-1;
        }
    }
    console.log(soma);
}