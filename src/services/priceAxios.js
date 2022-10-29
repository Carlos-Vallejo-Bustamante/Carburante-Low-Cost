import InitAxios from "./initAxios";

class PriceAxios extends InitAxios {
    constructor() {
        super('/EstacionesTerrestres');
    }

    getLivePrices() {
        return this.axios.get(`/`).then((response) => response.data);
    }

    getPricesCity(id) {
        return this.axios.get(`/FiltroMunicipio/${id}`).then((response) => response.data);
    }

    static getInstance() {
        if (!this.instance) {
            this.instance = new PriceAxios();
        }
        return this.instance;
    }

}

export default PriceAxios.getInstance();