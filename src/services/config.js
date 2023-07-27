import axios from 'axios'

export const http = axios.create({
    baseURL: 'https://api.nytimes.com/svc/topstories/v2'
})