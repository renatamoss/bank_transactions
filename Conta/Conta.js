//Classe Conta: classe abstrada, ela só pode ser herdada, não pode ser criada;
//throw new Error: erro pára execução do código, na tentativa de criar a classe Conta.
//Classes abstratas são pensadas de forma que elas apenas possam ser herdadas por outras.

import { Cliente } from "../Cliente.js";

export class Conta {

    constructor(agencia, cliente, saldoInicial) {
        if (this.constructor == Conta) {
            throw new Error(`Você não deveria instanciar um objeto do tipo conta.`)
        }
        this._agencia = agencia;
        this._cliente = cliente;
        this._saldo = saldoInicial;
    }


    set cliente(novoValor) {
        if (novoValor instanceof Cliente) {
            this._cliente = novoValor;
        }
    }

    get cliente() {
        return this._cliente;
    }

    get saldo() {
        return this._saldo;
    }

    //Método abstrato: Ele está de forma privada nas classes(ContaCorrente, ContaPoupança, ContaSalario)
    sacar(valor) {
        throw new Error(`O método sacar da Conta é abstrato`);
    }

    //método privado sacar: sobrescrito na classe específica do objeto, com taxa específica de cd objeto.
    _sacar(valor, taxa) {
        const valorSacado = valor * taxa;
        if (this._saldo >= valorSacado) {
            this._saldo -= valorSacado;
            return valorSacado;
        }

        return 0;
    }

    depositar(valor) {
        if (valor <= 0) {
            return;
        }
        this._saldo += valor;
    }

    transferir(valor, conta) {
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }

}
