console.log(`\nTrabalhando com condicionais`);
var listaDestinos = new Array(
    "Salvador",
    "São Paulo",
    "Rio de Janeiro"
);

var idadeComprador = 18;
var estaAcompanhada = false;
var temPassagemComprada = false;
var destino = "Curitiba";

console.log("\nDestinos possíveis:");
console.log(listaDestinos);

var podeComprar = idadeComprador >= 18 || estaAcompanhada == true;

let contador = 0;
let destinoExiste = false;
while(contador < 3){
    if(listaDestinos[contador] == destino){
        destinoExiste = true;
        break;
    }
    contador += 1; //contador = contador + 1;
}

console.log("Destino existe: ", destinoExiste);


if(podeComprar && destinoExiste){
    console.log("Boa Viagem");
}else{
    console.log("Houve algum impedimento!");
}


for(let i=0; i<3; i++){
    if(listaDestinos[i] == destino){
        destinoExiste = true;
    }
}