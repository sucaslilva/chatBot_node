let state = 'boasvindas'
const logger = require('./monitor/log');
const states = require('./states')

async function run(){
    logger.info("Bot iniciado!");
    while (state !== 'sair'){
        const next = await states[state]();
        state = next;
    }
    console.log("Obrigado por usar o SucasBot, até mais!");
    logger.info("Bot finalizado!");
}

module.exports = run;