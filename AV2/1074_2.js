var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};

var x = parseInt(prompt());
var i = 0;
do{ 
    var numero = parseInt(prompt());
    i++;
    if(numero<0){
        if(numero%2 == 0){
            console.log("EVEN NEGATIVE");
        } else {
            console.log('ODD NEGATIVE');
        }
    }else {
        if(numero>0) {
            if(numero%2 == 0){
                console.log("EVEN POSITIVE");
            } else {
                console.log('ODD POSITIVE');
            }
        } else {
            console.log('NULL');
            }
        }

} while (i < x );