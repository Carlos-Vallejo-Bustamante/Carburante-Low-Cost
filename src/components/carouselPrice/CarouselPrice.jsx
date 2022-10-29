import React, { useEffect, useState } from 'react'
import priceAxios from '../../services/priceAxios';
import '../CardAllGasStation.css'

function CarouselPrice() {
    const [stations, setStations] = useState([])

    const getRandomArbitrary = (min, max) => {
        return parseInt(Math.random() * (max - min) + min);
    }

    useEffect(() => {
        priceAxios
            .getLivePrices()
            .then(({ ListaEESSPrecio }) => {
                setStations(JSON.parse(JSON.stringify(ListaEESSPrecio).replaceAll(" ", "_").replaceAll("(", "").replaceAll(")", "")))
            })
    }, [])


    return (
        <>
            {stations && <div className='d-flex slide'>
                <div className='col-8 col-md-5 col-lg-3 col-xl-2'>
                    <p className='pe-3'>ÚLTIMOS PRECIOS DE DIESEL</p>
                </div>
                {stations && stations.slice(getRandomArbitrary(0, 4050), getRandomArbitrary(4051, 8109)).map((station) =>
                    <div key={Math.random() * (5000 - 1) + 1} className='col-2 text-truncate me-2 pe-2'>
                        {station.Precio_Gasoleo_A.length > 1 &&
                            <div className="digital d-flex row text-truncate">
                                <p className='flex-row mb-0'>{+station.Precio_Gasoleo_A.replaceAll(',', '.')} €/l</p>
                                <p className='small flex-row col-12 col-md- text-truncate'>{station.Rótulo.replaceAll("_", " ")} en {station.Municipio.replaceAll("_", " ")}...</p>
                            </div>
                        }
                    </div>

                )}
            </div>}
            {stations && <div className='d-flex slide2'>
                <div className='col-9 col-md-5 col-lg-3 col-xl-2'>
                    <p className='pe-3'>ÚLTIMOS PRECIOS DE GASOLINA</p>
                </div>
                {stations && stations.slice(getRandomArbitrary(0, 4050), getRandomArbitrary(4051, 8109)).map((station) =>
                    <div key={Math.random() * (5000 - 1) + 1.1} className='col-2 text-truncate me-2 pe-2'>
                        {station.Precio_Gasolina_95_E5.length > 1 &&
                            <div className="digital d-flex row text-truncate">
                                <p className='flex-row mb-0'>{+station.Precio_Gasolina_95_E5.replaceAll(',', '.')} €/l</p>
                                <p className='small flex-row col-12 col-md- text-truncate'>{station.Rótulo.replaceAll("_", " ")} en {station.Municipio.replaceAll("_", " ")}...</p>
                            </div>
                        }
                    </div>

                )}
            </div>}
        </>

    )
}

export default CarouselPrice