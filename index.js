import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./Conta/ContaCorrente.js";
import { ContaPoupanca } from "./Conta/ContaPoupanca.js";
import { ContaSalario } from "./Conta/ContaSalario.js";

import { Gerente } from "./Funcionario/Gerente.js";
import { Diretor } from "./Funcionario/Diretor.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

//Clientes:
const cliente1 = new Cliente(`Nome Cliente1`, 1122233344);
const cliente2 = new Cliente(`Nome Cliente2`, 88822233309);
const cliente3 = new Cliente(`Nome Cliente3`, 99922233309);


//Contas:
const contaCorrenteCliente1 = new ContaCorrente(1001, cliente1, 0);
const contaCorrenteCliente2 = new ContaCorrente(2002, cliente2, 0);
const contaCorrenteCliente3 = new ContaCorrente(3003, cliente3, 0);
const contaPoupancaCliente1 = new ContaPoupanca(1001, cliente1, 50);
const contaSalarioCliente1 = new ContaSalario(1001, cliente1, 70);
console.log(`Qtde de Conta(s) Corrente(s): `, ContaCorrente.quantidadeContasCorrentes);
console.log(`Qtde de Conta(s) Poupança(s): `, ContaPoupanca.quantidadeContasPoupanças);
console.log(`Qtde de Conta(s) Salário(s): `, ContaSalario.quantidadeContasSalarios);


//Transações(na classe do Objeto extends Conta):
contaCorrenteCliente1.depositar(2000);
contaCorrenteCliente1.sacar(200);
contaCorrenteCliente2.depositar(100);
contaCorrenteCliente3.depositar(8000);
contaCorrenteCliente1.transferir(150, contaCorrenteCliente2);
contaPoupancaCliente1.depositar(10000);
contaSalarioCliente1.depositar(7000);
contaSalarioCliente1.sacar(30);
console.log(`Posição das contas: `, contaCorrenteCliente1, contaCorrenteCliente2, contaCorrenteCliente3, contaPoupancaCliente1, contaSalarioCliente1);


//Funcionários:
const diretor = new Diretor(`Nome Diretor`, 88877733344, 22000);
const gerente = new Gerente(`Nome Gerente`, 99988877700, 11000);
diretor.cadastrarSenha(`123`);
gerente.cadastrarSenha(`123`);
console.log(`Relação de funcionários: `, diretor, gerente);

//Sistema Autenticação:
const estaLogadoDiretor = SistemaAutenticacao.login(diretor, `123`);
const estaLogadoGerente = SistemaAutenticacao.login(gerente, `0`);

console.log(`Diretor está logado? `, estaLogadoDiretor);
console.log(`Gerente está logado? `, estaLogadoGerente);

