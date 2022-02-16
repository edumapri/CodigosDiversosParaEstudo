import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js";
import {ContaPoupanca} from "./ContaPoupanca.js"
import {Conta} from "./Conta.js";


var cliente1 = new Cliente("Ricardo", 11122233309);
var contaCorrenteRicardo = new ContaCorrente(cliente1, 1001);
contaCorrenteRicardo.depositar(500);
contaCorrenteRicardo.sacar(100);

var contaPoupanca = new ContaPoupanca(50, cliente1, 1001); //cliente1 é uma variável de referência

console.log(contaPoupanca);
console.log(contaCorrenteRicardo);







