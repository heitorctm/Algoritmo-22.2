var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};


var salario = parseFloat(prompt());


if(salario <= 400) {
    console.log("Novo salario: "+(salario*1.15).toFixed(2));
    console.log("Reajuste ganho: "+(salario*0.15).toFixed(2));
    console.log("Em percentual: 15 %")
}
if(salario>400 && salario <=800){
    console.log("Novo salario: "+(salario*1.12).toFixed(2));
    console.log("Reajuste ganho: "+(salario*0.12).toFixed(2));
    console.log("Em percentual: 12 %")
}
if(salario>800 && salario <=1200){
    console.log("Novo salario: "+(salario*1.1).toFixed(2));
    console.log("Reajuste ganho: "+(salario*0.1).toFixed(2));
    console.log("Em percentual: 10 %")
}
if(salario>1200 && salario <=2000){
    console.log("Novo salario: "+(salario*1.07).toFixed(2));
    console.log("Reajuste ganho: "+(salario*0.07).toFixed(2));
    console.log("Em percentual: 7 %")
}
if(salario>2000) {
    console.log("Novo salario: "+(salario*1.04).toFixed(2));
    console.log("Reajuste ganho: "+(salario*0.04).toFixed(2));
    console.log("Em percentual: 4 %")
}