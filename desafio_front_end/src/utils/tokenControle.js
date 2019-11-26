import { AsyncStorage } from 'react-native';

export const TOKEN_KEY = "@republica-interativa-mobile:token";

module.exports = {   

  async  armazenarToken(token) {
    AsyncStorage.setItem(TOKEN_KEY, token);
  },

  async buscarToken(){
    return AsyncStorage.getItem(TOKEN_KEY);
  },

  async isLogado(){
    const token = await AsyncStorage.getItem(TOKEN_KEY);
    if (token) return true;    
     else false;
  }

}