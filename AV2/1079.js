var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};

var x = parseInt(prompt());

for(var i = 0; i < x; i++) {
    var [n1, n2, n3] =  prompt().split(" ");
    n1 = +n1;
    n2 = +n2;
    n3 = +n3;

    var media = ((n1*2) + (n2*3) + (n3*5))/10 ;
    console.log(media.toFixed(1));
}