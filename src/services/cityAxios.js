import InitAxios from "./initAxios";

class CityAxios extends InitAxios {
    constructor() {
        super('/Listados');
    }

    getProvinces() {
        return this.axios.get('/Provincias').then((response) => response.data);
    }

    getCities(idProvince) {
        return this.axios.get(`/MunicipiosPorProvincia/${idProvince}`).then((response) => response.data);
    }

    static getInstance() {
        if (!this.instance) {
            this.instance = new CityAxios();
        }
        return this.instance;
    }

}

export default CityAxios.getInstance();