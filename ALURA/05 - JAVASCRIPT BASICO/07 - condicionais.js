console.log("Trabalhando com condicionais");
var listaDestinos = new Array(
    "Salvador",
    "São Paulo",
    "Rio de Janeiro"
);

var idadeComprador = 18;
var estaAcompanhada = false;
var temPassagemComprada = true;

console.log("Destinos possíveis");
console.log(`${listaDestinos} \n`);

// if (idadeComprador >= 18) {
//     console.log("Comprador maior de idade");
//     listaDeDestinos.splice(1, 1); //removendo item
// } else if (estaAcompanhada == true) {
//     console.log("Comprador está acompanhado");
//     listaDeDestinos.splice(1, 1); //removendo item
// } else {
//     console.log("Não é maior de Idade e não posso vender");
// }

if (idadeComprador >= 18 || estaAcompanhada == true){
    console.log("Boa viagem para o Rio de Janeiro");
    listaDestinos.splice(2, 1); //removendo 1 item do índice 2(Rio de Janeiro)   
}else{
    console.log("Menor de idade. Venda proíbida");
}

console.log("\nEmbarque: ");
if(idadeComprador >= 18 && temPassagemComprada==true){
    console.log("Boa viagem!!!\n");
}else{
    console.log("Você não pode embarcar\n");
}

console.log("Destinos possíveis");
console.log(listaDestinos);

// console.log(idadeComprador > 18);
// console.log(idadeComprador < 18);
// console.log(idadeComprador <= 18);
// console.log(idadeComprador >= 18);
// console.log(idadeComprador == 18);
