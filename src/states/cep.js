const readline = require('readline-sync');
const { buscaCep } = require('../services/apiCep');
const logger = require('../monitor/log');


module.exports = async () => {
    try {
        const uf = readline.question("Digite a UF do Estado: ").toUpperCase().trim();
        const cidade = readline.question("Digite o nome da Cidade: ").toString();
        const rua = readline.question("Digite o nome da Rua: ").toString();

        await buscaCep(uf, cidade, rua);

        return 'menu';

    } catch (error) {
        logger.error(error);
    }
};
