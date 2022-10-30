import { useState, createContext, useEffect } from 'react';
import priceAxios from '../services/priceAxios';

export const DataContext = createContext();

export const DataProvider = (props) => {

    const [stations, setStations] = useState([])

    useEffect(() => {
        priceAxios
            .getLivePrices()
            .then(({ ListaEESSPrecio }) => {
                setStations(JSON.parse(JSON.stringify(ListaEESSPrecio).replaceAll(" ", "_").replaceAll("(", "").replaceAll(")", "")))
            })
    }, [])

    return (
        <DataContext.Provider
            value={{ stations }}
        >
            {props.children}
        </DataContext.Provider>
    )

}