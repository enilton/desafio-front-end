const config = require('./../../config/idiomaConfig');
const mensagensPTBR = require('./pt-br');

module.exports = {
 
  idiomaAtual : config.IDIOMA_PADRAO,

  async  alterarIdioma(idioma) {
    this.idiomaAtual = idioma;
  },

  async buscarIdioma(){
    return this.idiomaAtual;
  },

  async get(){
    
    switch(this.idiomaAtual){
      
      case 'pt-br':
        return mensagensPTBR;
        break;
    }
  }
}