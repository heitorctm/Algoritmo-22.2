var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};
 
var [X, Y] =  prompt().split(" ");

var X = +(X);
var Y = +(Y);

if(X<0 || X>432 ) {
    console.log("fora");
 } else {
if (Y<0 || Y >468) {
    console.log("fora");    
} else {
    console.log("dentro");    
}
}