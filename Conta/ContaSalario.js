import { Conta  } from "./Conta.js";

export class ContaSalario extends Conta {
    static quantidadeContasSalarios = 0;
    constructor(agencia, cliente, saldoInicial) {
        super(agencia, cliente, saldoInicial);
        ContaSalario.quantidadeContasSalarios += 1;
    }

    //sobrescrevendo o comportamento de sacar da classe mãe Conta
    sacar(valor) {
        let taxa = 1.01;
        return this._sacar(valor, taxa);
    }
}