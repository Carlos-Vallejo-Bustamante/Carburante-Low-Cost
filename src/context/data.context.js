import { useState, createContext } from 'react';
import GetLocationAxios from '../services/getLocationAxios';
import priceAxios from '../services/priceAxios';

export const DataContext = createContext();

export const DataProvider = (props) => {

    const [stations, setStations] = useState([])
    const [stationsFiltered, setStationsFiltered] = useState([])
    const [active, setActive] = useState(true)

    const [cordinates, setCordinates] = useState({
        longitude: 0,
        latitude: 0
    })

    const handleLocation = () => {

        navigator.geolocation.getCurrentPosition(
            function (position) {
                setCordinates({
                    longitude: position.coords.longitude,
                    latitude: position.coords.latitude
                })
            },
            function (error) {
                console.log(error);
            },
            {
                enableHighAccuracy: true
            }
        )

        priceAxios
            .getLivePrices()
            .then(({ ListaEESSPrecio }) => {
                setStations(JSON.parse(JSON.stringify(ListaEESSPrecio).replaceAll(" ", "_").replaceAll("(", "").replaceAll(")", "")))
            })

        setTimeout(() => {
            setActive(false)
        }, 3000);

    }


    const handlestations = () => {

        GetLocationAxios
            .getLocationAxios(cordinates)
            .then((infoCity) => {
                const cutCity = infoCity.results[0].components.town
                const arrayStations = stations.filter((city) => city.Municipio === cutCity)
                setStationsFiltered(arrayStations)
            })
    }

    return (
        <DataContext.Provider
            value={{ stations, cordinates, stationsFiltered, handlestations, handleLocation, active, setActive }}
        >
            {props.children}
        </DataContext.Provider>
    )

}