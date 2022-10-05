var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};

var alunos = parseInt(prompt());

for(var i = 0; i < alunos; i++){
    var [matricula, nota] =  prompt().split(" ");
    var matricula = +matricula;
    var nota = +nota;
    var auxNota;
    var auxMatricula;
    if(nota > auxNota) {
    auxNota = nota;
    auxMatricula = matricula;

    }
}
if(auxNota >= 8){
    console.log(auxMatricula);
} else console.log('')