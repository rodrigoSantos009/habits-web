import axios from "axios"

export const api = axios.create({
    baseURL: 'https://habits-server-o2u0.onrender.com'
})