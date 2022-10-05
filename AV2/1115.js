var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};

var [x, y] =  prompt().split(" ");

x = parseInt(x);
y = parseInt(y);
var repete = 0;

while(repete != 1){

    if(x == 0 || y == 0) {
        var repete = 1;
    } else {

    if(x > 0){
        if(y > 0) {
            console.log("primeiro");
        } else if (y < 0){
            console.log("quarto");
        }
    } else if(x < 0){
        if(y > 0) {
            console.log("segundo");
        } else if (y < 0){
            console.log("terceiro");
        }
    }
    var [x, y] =  prompt().split(" ");
    x = parseInt(x);
    y = parseInt(y);
}}