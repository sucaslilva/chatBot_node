const axios = require('axios');
const logger = require('../monitor/log');

const urlApi = "https://viacep.com.br/ws/";

async function buscaCep(uf, cidade, rua) {
    try {
        const response = await axios.get(`${urlApi}${uf}/${cidade}/${rua}/json`);
        console.log("Foram encontrado(s) o(s) seguinte(s) CEP(s):")
        response.data.forEach(obj => {
            console.log(`${obj.cep}`);
        });
    } catch (error) {
        console.error('Erro ao realizar a requisição: ', error.message);
        logger.error(error);
    }
}

async function buscaDadosCep(cep) {
    try {
        const response = await axios.get(`${urlApi}${cep}/json`);
        console.log("*** Segue os dados do CEP informado ***");
        const obj = response.data;
        console.log(`Lougradouro: ${obj.logradouro}`);
        console.log(`Bairro: ${obj.bairro}`);
        console.log(`Cidade: ${obj.localidade}`);
        console.log(`Estado: ${obj.estado}`);
    } catch (error) {
        console.error('Erro ao realizar a requisição: ', error.message);
        logger.error(error);
    }
}

module.exports = {
    buscaCep,
    buscaDadosCep
}