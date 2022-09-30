var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};

var repete = 1;

while( repete == 1) {
    var A = parseFloat(prompt());
    var B = parseFloat(prompt());

    while(A > 10 || A < 0) {
        console.log("nota invalida");
        A = parseFloat(prompt());
    }
    while(B > 10 || B < 0) {
        console.log("nota invalida");
        B = parseFloat(prompt());
    }
    var media = 0;
    media = ((A+B)/2).toFixed(2);
    console.log("media = "+media);
    console.log("novo calculo (1-sim 2-nao)");
    repete = parseInt(prompt());
    while(repete != 1 && repete != 2) {
        console.log("novo calculo (1-sim 2-nao)");
        repete = parseInt(prompt());
    }
}