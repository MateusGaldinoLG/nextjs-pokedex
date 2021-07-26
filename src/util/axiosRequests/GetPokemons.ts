import axios from 'axios';

export const api = axios.create({
    baseURL:'https://pokeapi.co/api/v2/'
})

export const internalApi = axios.create({
    baseURL:'http://localhost:3000/api/'
})
