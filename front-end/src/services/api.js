import axios from 'axios' //conectar o back-end com o front-end

const api = axios.create({
    baseURL:'http://localhost:3333'
})

export default api