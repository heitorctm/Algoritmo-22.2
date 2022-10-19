var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};
 

var testes = parseInt(10);

var a = 1;
var b = 1;
var string="0";
for(i=1; i < testes; i++) {
    string +=' '+a;
    b = a + b;
    a = a + b;
}
string = string.replace('  ','');
console.log(string);