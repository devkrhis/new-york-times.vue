import { http } from './config'

export default {
    listTechnology:() => {
        return http.get('technology.json?api-key=iJAkSDdBVyIWs5pIX7hxCaJwpv58lAeV')
    }
}