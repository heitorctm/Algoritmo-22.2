    var input = require('fs').readFileSync('/dev/stdin', 'utf8');
    var lines = input.split('\n');
    var prompt = function(texto) { return lines.shift();};

    var x = parseInt(prompt());

    for(var i = 1;i <=10000;i++){
        if(i%x == 2){
            console.log(i);
        }
    }