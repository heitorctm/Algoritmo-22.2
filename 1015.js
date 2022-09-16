var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};

var [x1, y1] =  prompt().split(" ");
var [x2, y2] =  prompt().split(" ");

var distancia = (Math.sqrt(Math.pow(parseFloat(x2)-parseFloat(x1),2) + Math.pow(parseFloat(y2)-parseFloat(y1),2))).toFixed(4);
console.log(distancia);