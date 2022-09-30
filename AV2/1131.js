var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var prompt = function(texto) { return lines.shift();};
 
var repete = 1;
var wGremio = 0;
var wInter = 0;
var empates = 0;
var nJogos = 0;

while(repete == 1) {

    var [inter, gremio] =  prompt().split(" ");

    inter = +inter;
    gremio = +gremio;

    if(inter == gremio){
        empates++;
    }
    if(inter > gremio){
        wInter++;
    }
    if(inter< gremio){
        wGremio++;
    }
    
    console.log("Novo grenal (1-sim 2-nao)");
    repete = parseInt(prompt());
  }

  nJogos = nJogos+wGremio+wInter+empates;

  console.log(nJogos+" grenais");
  console.log("Inter:"+wInter);
  console.log("Gremio:"+wGremio);
  console.log("Empates:"+empates);
  if(wInter > wGremio) {
    console.log("Inter venceu mais");
  }
  if(wInter < wGremio) {
    console.log("Gremio venceu mais");
  }
  if(wInter == wGremio) {
    console.log("Nao houve vencedor");
  }