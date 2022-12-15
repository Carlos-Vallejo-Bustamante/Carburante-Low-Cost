import * as React from 'react';
import { useEffect, useState } from 'react';
import cityAxios from '../../services/cityAxios';
import priceAxios from '../../services/priceAxios';
import CardAllGasStation from '../cardAllGasStation/CardAllGasStation';

const Provinces = () => {

    const [provinces, setProvinces] = useState([])
    const [cities, setCities] = useState([])
    const [stationsSortGas, setStationsSortGas] = useState([])
    const [stationsSort95, setStationsSort95] = useState([])
    const [date, setDate] = useState('')
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
            .then((gasStations) => {
                setStationsSortGas(JSON.parse(JSON.stringify(gasStations.ListaEESSPrecio).replaceAll(" ", "_").replaceAll("(", "").replaceAll(")", ""))
                    .filter((stationfiltered) => stationfiltered.Precio_Gasoleo_A !== '' && stationfiltered.Precio_Gasolina_95_E5 !== '')
                    .sort((a, b) => +a.Precio_Gasoleo_A.replaceAll(',', '.') - +b.Precio_Gasoleo_A.replaceAll(',', '.'))
                )
                setStationsSort95(JSON.parse(JSON.stringify(gasStations.ListaEESSPrecio).replaceAll(" ", "_").replaceAll("(", "").replaceAll(")", ""))
                    .filter((stationfiltered) => stationfiltered.Precio_Gasoleo_A !== '' && stationfiltered.Precio_Gasolina_95_E5 !== '')
                    .sort((a, b) => +a.Precio_Gasolina_95_E5.replaceAll(',', '.') - +b.Precio_Gasolina_95_E5.replaceAll(',', '.'))
                )
                setDate(gasStations.Fecha)
            }
            )
    }

    return (
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
            {stationsSortGas.length !== 0 ?
                <CardAllGasStation city={city} stationsSortGas={stationsSortGas} stationsSort95={stationsSort95} date={date} />
                :
                <h3 className='text-center my-5'>No hay Gasolineras</h3>
            }
        </div>
    )
}

export default Provinces;