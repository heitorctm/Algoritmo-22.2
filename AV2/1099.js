var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};

var x = parseInt(prompt());
var cont = 0;


while(cont < x) { 

    var [Z, Y] =  prompt().split(" ");
    Z = +Z;
    Y = +Y;
    var soma = 0;
    var aux = 0;

    if(Y > Z){
        aux = Y;
        Y = Z;
        Z = aux;
        aux = 0;
    }
    
    if(Y < 0 && Z >= 0) {
    numerosEntre = Z + Math.abs(Y)-1;
    } else {
        if(Y < 0 && Z < 0) {
            numerosEntre = Math.abs(Z + Y)-1;
        } else {
            numerosEntre = Z - Y;
        }
    }
    for(var i = 1; i < numerosEntre; i++){
        aux = (Y+i)%2;
        if(aux !== 0){
            soma = (Y+i) + soma;
        }
    }
    console.log(soma);
    cont++;
} 