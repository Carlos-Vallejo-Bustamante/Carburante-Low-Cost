import axios from 'axios';
class GetLocationAxios {
    constructor(path) {
        this.axios = axios.create({
            baseURL: `http://ipwho.is/${path}`
        })
    }

    getLocationAxios(ip) {
        return this.axios.get(`/${ip}`).then((response) => response.data);
    }

    static getInstance() {
        if (!this.instance) {
            this.instance = new GetLocationAxios();
        }
        return this.instance;
    }

}
export default GetLocationAxios.getInstance();