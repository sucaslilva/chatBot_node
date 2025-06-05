const readline = require('readline-sync');
const { buscaDadosCep } = require('../services/apiCep');
const logger = require('../monitor/log');


module.exports = async () => {
    try {
        const cep = readline.question("Digite o CEP: ").toString();
        const cepFormatado = cep.replace(/\D/g, '');
        if (cepFormatado.length === 8) {
            await buscaDadosCep(cep);
            return 'menu';
        } else {
            console.log("CEP inválido.");
            return 'dadosCep';
        }
    } catch (error) {
        logger.error(error);
    }
};
