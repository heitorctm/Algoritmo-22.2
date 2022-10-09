var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};

do{
    var vetor = [];
    var soma = 0;
    var [x, y] =  prompt().split(" ");
    x = parseInt(x);
    y = parseInt(y);
    var aux = 0;
    if(y > x){
        aux = y;
        y = x;
        x = aux;
    }
    x = parseInt(x);
    y = parseInt(y);
    if(x > 0 && y > 0){
        for(var i = 0; i <= (x-y); i++){
            soma = soma + (y + i);
            vetor.push(y+i);
        }
        console.log(vetor.join(' ') + ' '+'Sum='+soma);
    }
} while(x>0 || y>0);