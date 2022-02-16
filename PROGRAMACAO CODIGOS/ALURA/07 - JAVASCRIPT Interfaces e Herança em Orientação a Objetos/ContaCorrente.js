import { Cliente } from "./Cliente.js";
import { Conta } from "./Conta.js"

export class ContaCorrente extends Conta{ // Herda atributos e metódos da classe Conta 
    static numeroDeContas = 0; //Quando for citado sempre terá alteração em seu valor independente
    
    constructor(cliente, agencia){
        super(0, cliente, agencia); // super está refenenciando a classe Conta por conta do "extends Conta"
        ContaCorrente.numeroDeContas += 1; // numeroDeContas é um atributo estático
    }
}