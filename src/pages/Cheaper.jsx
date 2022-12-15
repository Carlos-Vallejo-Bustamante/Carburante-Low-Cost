import React, { useEffect, useState } from 'react'
import Hero from '../components/hero/Hero';
import Spinn from '../components/spinner/Spinner';
import priceAxios from '../services/priceAxios';

function Cheaper() {
    const [stations, setStations] = useState([])
    const [maxPriceDiesel, setmaxPriceDiesel] = useState([])
    const [minPriceDiesel, setminPriceDiesel] = useState([])
    const [averagePriceDiesel, setaveragePriceDiesel] = useState([])

    const [maxPriceGasolina, setmaxPriceGasolina] = useState([])
    const [minPriceGasolina, setminPriceGasolina] = useState([])
    const [averagePriceGasolina, setaveragePriceGasolina] = useState([])

    const title = 'Las gasolineras más baratas en España'

    useEffect(() => {
        priceAxios
            .getLivePrices()
            .then(({ ListaEESSPrecio }) => {
                console.log('LLEGOOOOOO', ListaEESSPrecio)

                const filteredStations = JSON.parse(JSON.stringify(ListaEESSPrecio).replaceAll(" ", "_").replaceAll("(", "").replaceAll(")", ""))
                    .filter(notZero => notZero.Precio_Gasolina_95_E5.length > 3 && notZero.Precio_Gasoleo_A.length > 3)
                    .filter(filtradas => filtradas.IDProvincia !== '35' && filtradas.IDProvincia !== '52' && filtradas.IDProvincia !== '38' && filtradas.IDProvincia !== '51' && filtradas.IDProvincia !== '52')
                setStations(filteredStations)

                return filteredStations
            })
            .then((filteredStations) => {
                console.log('PRICESS', filteredStations);
                const diesel = filteredStations?.map(numbers => +numbers.Precio_Gasoleo_A.replaceAll(',', '.'))

                setmaxPriceDiesel(diesel?.reduce((a, b) => Math.max(a, b)))
                setminPriceDiesel(diesel?.reduce((a, b) => Math.min(a, b)))
                setaveragePriceDiesel(diesel?.reduce((a, b) => a + b) / diesel?.length)

                const gasolina = filteredStations?.map(numbers => +numbers.Precio_Gasolina_95_E5.replaceAll(',', '.'))

                setmaxPriceGasolina(gasolina?.reduce((a, b) => Math.max(a, b)))
                setminPriceGasolina(gasolina?.reduce((a, b) => Math.min(a, b)))
                setaveragePriceGasolina(gasolina?.reduce((a, b) => a + b) / gasolina?.length)
            })
    }, [])

    // const updateData = () => {
    //     const diesel = stations?.map(numbers => +numbers.Precio_Gasoleo_A.replaceAll(',', '.'))

    //     const maxPriceDiesel = diesel?.reduce((a, b) => Math.max(a, b))
    //     const minPriceDiesel = diesel?.reduce((a, b) => Math.min(a, b))
    //     const averagePriceDiesel = diesel?.reduce((a, b) => a + b) / diesel?.length

    //     const gasolina = stations?.map(numbers => +numbers.Precio_Gasolina_95_E5.replaceAll(',', '.'))

    //     const maxPriceGasolina = gasolina?.reduce((a, b) => Math.max(a, b))
    //     const minPriceGasolina = gasolina?.reduce((a, b) => Math.min(a, b))
    //     const averagePriceGasolina = gasolina?.reduce((a, b) => a + b) / gasolina?.length


    // }



    return (

        <>
            <Hero title={title} />

            <div className="container bg-white rounded text-dark py-3 my-3">
                <div className="row d-flex justify-content-center">
                    <div className="px-5">
                        <h1>Las gasolineras más baratas en España</h1>
                        <p>Encuentra la gasolinera que te ofrece los mejores precios del carburante en todo el país y ahorra dinero en el reostaje de tu vehículo</p>
                        <h2>El precio en las gasolineras MÁS BARATAS de España</h2>
                        <p>Saber el precio de las gasolineras más baratas en un día determinado es importante, pero determinar cuál es la estación de servicio más económica a lo largo del tiempo es algo más complicado. Por eso te hacemos llegar los precios del combustible en las gasolineras que son, de forma consistente, las estaciones de servicio más baratas del país.</p>
                        <p>Sin perder de vista la tendencia del combustible a nivel nacional, queremos hacerte llegar toda la información sobre las que consideramos las mejores estaciones de servicio del país desde el punto de vista económico y que, por tanto, ofrecen un mayor ahorro en cada repostaje de un vehículo a nivel general.</p>
                    </div>
                    {stations.length > 1 &&
                        <>
                            <div className="row col-10 my-5">
                                <div className='bg-danger d-flex justify-content-center flex-column text-white text-center py-3 my-1'>
                                    <h3 className=''>PRECIO MÁXIMO HOY DEL DIÉSEL</h3>
                                    <p>El Precio máximo del Diésel hoy es de <span className='digital'>{maxPriceDiesel.toFixed(3)} €/l</span></p>
                                </div>
                                <div className='bg-dark d-flex justify-content-center flex-column text-white text-center py-3 my-1'>
                                    <h3 className=''>PRECIO MEDIO HOY DEL DIÉSEL</h3>
                                    <p>El Precio medio del Diésel hoy es de <span className='digital'>{averagePriceDiesel.toFixed(3)} €/l</span></p>
                                </div>
                                <div className='bg-success d-flex justify-content-center flex-column text-white text-center py-3 my-1'>
                                    <h3 className=''>PRECIO MÍNIMO HOY DEL DIÉSEL</h3>
                                    <p>El Precio mínimo del Diésel hoy es de <span className='digital'>{minPriceDiesel.toFixed(3)} €/l</span></p>
                                </div>
                            </div>
                            <div className="row col-10 mb-5">
                                <div className='bg-danger d-flex justify-content-center flex-column text-white text-center py-3 my-1'>
                                    <h3 className=''>PRECIO MÁXIMO HOY DEL GASOLINA 95</h3>
                                    <p>El Precio máximo de la gasolina 95 hoy es de <span className='digital'>{maxPriceGasolina.toFixed(3)} €/l</span></p>
                                </div>
                                <div className='bg-dark d-flex justify-content-center flex-column text-white text-center py-3 my-1'>
                                    <h3 className=''>PRECIO MEDIO HOY DEL GASOLINA 95</h3>
                                    <p>El Precio medio de la gasolina 95 hoy es de <span className='digital'>{averagePriceGasolina.toFixed(3)} €/l</span></p>
                                </div>
                                <div className='bg-success d-flex justify-content-center flex-column text-white text-center py-3 my-1'>
                                    <h3 className=''>PRECIO MÍNIMO HOY DEL GASOLINA 95</h3>
                                    <p>El Precio mínimo de la gasolina 95 hoy es de <span className='digital'>{minPriceGasolina.toFixed(3)} €/l</span></p>
                                </div>
                            </div>
                        </>}
                    <div className="container my-5">
                        <div className="d-flex justify-content-center">
                            <Spinn />
                        </div>
                    </div>
                </div>
            </div>



        </>

    )
}

export default Cheaper