import API from '../services/api';
import { AsyncStorage } from 'react-native';
import * as Rotas from './rotas';

module.exports = { 

  TOKEN_KEY : "@republica-interativa-mobile:token",
  USER_INFO_KEY: "@republica-interativa-mobile:user_info",

  async armazenarToken(token) {
    AsyncStorage.setItem(this.TOKEN_KEY, token);
  },

  async buscarToken(){
    return AsyncStorage.getItem(this.TOKEN_KEY);
  },

  async armazenarUsuario(usuario){
    AsyncStorage.setItem(this.USER_INFO_KEY, usuario);
  },

  async usuario(){
    return AsyncStorage.getItem(this.USER_INFO_KEY);
  },

  async criarSessao(bodyParams) {
    const response = await API.post(Rotas.URL_CRIAR_SESSAO, bodyParams);  
    if (response.status === 200) {
        this.armazenarUsuario(response.data.usuario);
        this.armazenarToken(response.data.token);
    }
    return response.data;
  },

  async deslogar() {
     return await API.post(Rotas.URL_DESLOGAR, { teste:'teste'}, {
        headers: { Authorization: "Bearer " + await this.buscarToken() }
      }).data;
  },

  
}