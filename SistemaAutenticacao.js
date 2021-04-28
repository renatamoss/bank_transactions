//Polimorfismo: utilização método cadastrarSenha para objetos diferentes Diretor e Gerente.
//Polimorfismo significa capacidade de chamar o mesmo método em objetos diferentes e cada 
//objeto responde de maneira diferente.
//Ser autenticável significa ter um método autenticar.
//Ducky Type: comum em linguagem tipagem fraca.

export class SistemaAutenticacao {
    static login(autenticavel, senha) {
        if (SistemaAutenticacao.ehAutenticavel(autenticavel)) {
            return autenticavel.autenticar(senha);
        }
        return false;
    }

    static ehAutenticavel(autenticavel) {
        return "autenticar" in autenticavel &&
            autenticavel.autenticar instanceof Function
    }
}

