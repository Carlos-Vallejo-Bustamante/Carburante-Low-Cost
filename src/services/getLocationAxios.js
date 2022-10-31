import axios from 'axios';
class GetLocationAxios {
    constructor() {
        this.axios = axios.create({
            baseURL: `https://maps.googleapis.com/maps/api/geocode`
        })
    }

    getLocationAxios(cordinates) {
        return this.axios.get(`/json?latlng=${cordinates.latitude},${cordinates.longitude}&language=es&result_type=political&key=AIzaSyAr6WjP2-THB-i9F3DaaBkmmB0cUmHb3i0`).then((response) => response.data);
    }

    static getInstance() {
        if (!this.instance) {
            this.instance = new GetLocationAxios();
        }
        return this.instance;
    }

}
export default GetLocationAxios.getInstance();