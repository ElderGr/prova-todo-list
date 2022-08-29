import axios from 'axios'

export const api = axios.create({
    baseURL: 'https://prova-mobile.azurewebsites.net/api/'
})