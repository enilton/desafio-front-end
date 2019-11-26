const mensagensPTBR = require('../resources/idiomas/pt-br');

module.exports = {
 
  idiomaAtual : 'pt-br',

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