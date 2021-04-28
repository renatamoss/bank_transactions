import { Conta } from "./Conta.js";

export class ContaPoupanca extends Conta {
    static quantidadeContasPoupanças = 0;
    constructor(agencia, cliente, saldoInicial) {
        super(agencia, cliente, saldoInicial);
        ContaPoupanca.quantidadeContasPoupanças += 1;
    }

    //sobrescrevendo o comportamento de sacar da classe mãe Conta
    sacar(valor) {
        const taxa = 1.10;
        return this._sacar(valor, taxa);
    }
}