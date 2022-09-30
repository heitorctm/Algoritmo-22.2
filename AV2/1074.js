var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};

var x = parseInt(prompt());
var cont = 0;

while(cont < x) { 
    var Y = parseInt(prompt());
    if(Y < 0) {
        if(Y%2 == 0){
            console.log('EVEN NEGATIVE');
        } else {
            console.log('ODD NEGATIVE');
        }
    } else {
        if(Y > 0) {
            if(Y%2 == 0){
                console.log('EVEN POSITIVE');
            } else {
                console.log('ODD POSITIVE');
                }
        } else {
            console.log('NULL');
            }
        }
cont++;
}