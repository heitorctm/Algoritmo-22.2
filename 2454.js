var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};
 
var [X, Y] =  prompt().split(" ");

X= +X;
Y= +Y;

if(X == 1) {
    if(Y == 0){
        console.log("B");
    } else {
        console.log("A");
    }
} else {
    console.log("C");
}
