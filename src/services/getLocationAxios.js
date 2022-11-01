import axios from 'axios';
class GetLocationAxios {
    constructor() {
        this.axios = axios.create({
            baseURL: `https://api.opencagedata.com/geocode/v1`,
        })
    }

    getLocationAxios(cordinates) {
        return this.axios.get(`/json?q=${cordinates.latitude}%2C%20${cordinates.longitude}&key=${process.env.REACT_APP_API_KEY}&language=es&pretty=1`).then((response) => response.data);
    }

    static getInstance() {
        if (!this.instance) {
            this.instance = new GetLocationAxios();
        }
        return this.instance;
    }

}
export default GetLocationAxios.getInstance();