import * as React from 'react';
import { useEffect, useState } from 'react';
import cityAxios from '../../services/cityAxios';
import priceAxios from '../../services/priceAxios';
import CardAllGasStation from '../cardAllGasStation/CardAllGasStation';
import Hero from '../hero/Hero';

const Provinces = () => {

    const [provinces, setProvinces] = useState([])
    const [cities, setCities] = useState([])
    const [stations, setStations] = useState([])
    const [city, setCity] = useState('')

    useEffect(() => {
        cityAxios
            .getProvinces()
            .then((provinces) =>
                setProvinces(provinces)
            )
    }, [])

    const handleChangeProvince = ({ target }) => {
        cityAxios
            .getCities(target.value.slice(-2))
            .then((cities) =>
                setCities(cities)
            )
    }

    const handleChangeCity = ({ target }) => {
        const id = target.value.split('-')[1].trim()
        const municipio = target.value.split('-')[0].trim()
        setCity(municipio)

        priceAxios
            .getPricesCity(id)
            .then((gasStations) =>
                setStations(gasStations)
            )
    }

    return (
        <>
            <header>
                <Hero />
            </header>
            <div className="container">
                <form form-select="true">
                    <fieldset className='row'>
                        <div className="mb-3 col">
                            <label className="form-label">Elije tu provincia</label>
                            <select onChange={handleChangeProvince} id="disabledSelect" className="form-select" name='province' defaultValue={'DEFAULT'}>
                                <option value="DEFAULT" disabled>Selecciona provincia</option>
                                {provinces.map((province) =>
                                    <option key={province.IDPovincia}>{province.Provincia} - {province.IDPovincia}</option>
                                )}
                            </select>
                        </div>
                        <div className="mb-3 col">
                            <label className="form-label">Elije tu municipio</label>
                            <select onChange={handleChangeCity} id="disabledSelect" className="form-select" name='city' defaultValue={'DEFAULT'}>
                                <option value="DEFAULT" disabled>Selecciona municipio</option>
                                {cities.map((city) =>
                                    <option key={city.IDMunicipio}>{city.Municipio} - {city.IDMunicipio}</option>
                                )}
                            </select>
                        </div>
                    </fieldset>
                </form>
                <CardAllGasStation city={city} stations={stations} />
            </div>
        </>

    )
}

export default Provinces;