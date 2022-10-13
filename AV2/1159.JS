var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};


var A=1;

while (A != 0) {
  
    A = parseInt(prompt());
    if(A == 0) break;

    var soma = 0;
    
    if(A != 0 && A%2 == 0){
        for(var i = 0; i<5; i++){
            soma = soma + A;
            A+=2;
        } 
    } else if(A != 0 && A%2 != 0) {
        A++;
        for(var i = 0; i<5; i++){
            soma = soma + A;
            A+=2;
        } 
        }
    console.log(soma);
}