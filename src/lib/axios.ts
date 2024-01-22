import axios from "axios"

export const api = axios.create({
    baseURL: 'https://habits-server-xi.vercel.app'
})