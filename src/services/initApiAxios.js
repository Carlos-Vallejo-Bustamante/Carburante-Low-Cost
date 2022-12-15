import axios from 'axios';
class InitApiAxios {
    constructor(path) {
        this.axios = axios.create({
            baseURL: `https://sedeaplicaciones.minetur.gob.es/ServiciosRESTCarburantes/PreciosCarburantes/${path}`
        })
    }
}
export default InitApiAxios;