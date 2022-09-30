var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};
 
var A = parseInt(prompt());
var cont = 0;

while(cont< A){ 
    var B = parseInt(prompt());
    B = +B;
    var i = 1;

    while(i < B-1) {
        i++;
        var resto;
        resto = (B%i);
        if(resto == 0) {
            console.log(B + " nao eh primo");
            break
        }
    }
    if(resto !== 0){
        console.log(B + " eh primo");
    } 
   cont++;
}