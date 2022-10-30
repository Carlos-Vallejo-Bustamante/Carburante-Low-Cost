import axios from 'axios';
class GetIpAxios {
    constructor() {
        this.axios = axios.create({
            baseURL: `https://api.ipify.org?format=json`
        })
    }

    getIpAxios() {
        return this.axios.get('/').then((response) => response.data);
    }

    static getInstance() {
        if (!this.instance) {
            this.instance = new GetIpAxios();
        }
        return this.instance;
    }

}
export default GetIpAxios.getInstance();