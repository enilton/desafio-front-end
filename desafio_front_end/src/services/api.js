
import axios from 'axios'; 

const api = axios.create({  
    //baseURL: 'https://ri-desafio-back-end.herokuapp.com/api/'
    baseURL: 'http://10.0.0.8:3001/api/'
}); 

export default api;