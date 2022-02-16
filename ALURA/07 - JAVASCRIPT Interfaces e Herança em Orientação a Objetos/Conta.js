export class Conta{
    constructor(saldoInicial, cliente, agencia){
        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;
    }

    // set inseri
    // auxiliar cliente
    set cliente(novoValor){
        if(novoValor instanceof Cliente){//instaciando a classe Cliente
            this._cliente = novoValor;
        } 
    }

    // get consulta
    get cliente(){
        return this._cliente;
    }

    // Vai impedir de alterar o saldo no index.js 
    get saldo(){
        return this._saldo;
    }


    sacar(valor){
        let taxa = 1;
        let valorSacado = taxa * valor;
        if(this._saldo >= valorSacado){
            this._saldo -= valorSacado;
            return valorSacado;
        }
    }

    depositar (valor){
        this._saldo += valor;
    }

    transferir(valor, conta){
        let valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}