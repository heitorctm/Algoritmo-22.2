var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};
  
var filo =  prompt(); 
var classe = "";
var ordem = "";

if(filo == "vertebrado") {
    var classe = prompt();
    if(classe == "ave") {
        var ordem = prompt();
        if(ordem == "carnivoro") {
            console.log("aguia");
        } else {
            console.log("pomba");
            }
    } else {
        ordem = prompt();
        if(ordem == "onivoro") {
            console.log("homem");
            }else{
                console.log("vaca");

        }
    }

} else {
    classe = prompt();
    if(classe == "inseto") {
        ordem = prompt();
        if(ordem == "hematofago") {
            console.log("pulga");
        } else {
            console.log("lagarta");
            }
    } else{
        ordem = prompt()
        if(ordem == "hematofago") {
            console.log("sanguessuga");
            } else {
                console.log("minhoca");
                }
    }      
}