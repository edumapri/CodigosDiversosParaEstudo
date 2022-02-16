import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"

var cliente1 = new Cliente("Ricardo", 11122233309);
var cliente2 = new Cliente("Alice", 88822233309);


var contaCorrenteRicardo = new ContaCorrente(1001, cliente1);
contaCorrenteRicardo.depositar(500);
contaCorrenteRicardo.sacar(100);

var conta2 = new ContaCorrente(102, cliente2);

let valor = 200;
contaCorrenteRicardo.tranferir(valor, conta2);

console.log(contaCorrenteRicardo);