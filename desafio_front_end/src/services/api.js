
import axios from 'axios'; 

const api = axios.create({  
    baseURL: 'https://ri-desafio-back-end.herokuapp.com/api/'
}); 

export default api;