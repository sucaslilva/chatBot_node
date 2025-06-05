const readline = require('readline-sync');
const logger = require('../monitor/log');

module.exports = async () => {
    try {
        console.log("Menu:");
        console.log("[1] Buscar CEP");
        console.log("[2] Consultar CEP");
        console.log("[3] Sair");

        const resposta = readline.question("O que deseja fazer? ",);
        if (resposta === "1") return 'cep';
        if (resposta === "2") return 'dadosCep';
        if (resposta === "3") return 'sair';
        console.log("Opção inválida!");
        return 'menu';
    } catch (error) {
        logger.error(error);
    }


}