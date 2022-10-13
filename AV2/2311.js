var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};

var participantes = parseInt(prompt());

// FUNÇÕES AUXILIARES 
function getMax(numArray) {
    return Math.max.apply(null, numArray);
}
function getMin(numArray) {
    return Math.min.apply(null, numArray);
}

for(var i = 0; i<participantes; i++){

    var nome = prompt();
    var dificuldade = parseInt(prompt());
    for(var i = 0; i<7; i++){
        var notas = [];
        notas.push(prompt());
    }
    
}