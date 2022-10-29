import axios from 'axios';
class InitAxios {
    constructor(path) {
        this.axios = axios.create({
            baseURL: `https://sedeaplicaciones.minetur.gob.es/ServiciosRESTCarburantes/PreciosCarburantes/${path}`
        })
    }
}
export default InitAxios;