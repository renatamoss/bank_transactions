//extends: sintaxe do JavaScript para herança de uma classe
//Palavra-chave Super: Deve-se chamar o super construtor na classe derivada 
//antes de acessar 'this' ou retornar do construtor derivado 


import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta { //Herança: ContaCorrente vai herdar todo código da classe Conta
    static quantidadeContasCorrentes = 0;
    constructor(agencia, cliente, saldoInicial) {
        super(agencia, cliente, saldoInicial);
        ContaCorrente.quantidadeContasCorrentes += 1;
    }

    //sobrescrevendo o comportamento de sacar da classe mãe Conta
    sacar(valor) {
        let taxa = 1.1;
        return this._sacar(valor, taxa);
    }
}

