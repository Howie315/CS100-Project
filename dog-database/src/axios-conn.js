import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://dog-database-d87bb-default-rtdb.firebaseio.com/'
  });
  
  export default instance;