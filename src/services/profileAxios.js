import InitServerAxios from './initServerAxios';

class ProfileAxios extends InitServerAxios {
    constructor() {
        super('profile')
    }

    me(token) {
        return this.axios.get('/', {
            headers: {
                'authorization': `Bearer ${token}`
            }
        }).then((response) => response.data)
    }

    static getInstance() {
        if (!this.instance) {
            this.instance = new ProfileAxios()
        }
        return this.instance
    }
}

export default ProfileAxios.getInstance();