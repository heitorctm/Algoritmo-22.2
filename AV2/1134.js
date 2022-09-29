var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};
 
var A = parseInt(prompt());

var alcool = 0 ;
var Gasolina = 0;
var Diesel = 0;

while(A!=4) {
    if(A==1) {
        alcool++;
    }
    if(A == 2){
        Gasolina++;
    }
    if(A == 3){
        Diesel++;
    }
    A = parseInt(prompt());
}
console.log("MUITO OBRIGADO");
console.log("Alcool: "+alcool);
console.log("Gasolina: "+Gasolina);
console.log("Diesel: "+Diesel);