import axios from "axios";

const api = axios.create({
      baseURL:"https://backend-usuarios.herokuapp.com/api"
});

export default api;