import React, { useContext } from 'react'
import { DataContext } from '../context/data.context';

function Cheaper() {
    const { stations } = useContext(DataContext);

    const diesel = stations.map(numbers => +numbers.Precio_Gasoleo_A.replaceAll(',', '.'))
    const outZerosDiesel = diesel.filter(numbers => numbers > 1.50)

    const maxPriceDiesel = outZerosDiesel.reduce((a, b) => Math.max(a, b))
    const minPriceDiesel = outZerosDiesel.reduce((a, b) => Math.min(a, b))
    const averagePriceDiesel = outZerosDiesel.reduce((a, b) => a + b) / outZerosDiesel.length

    const gasolina = stations.map(numbers => +numbers.Precio_Gasolina_95_E5.replaceAll(',', '.'))
    const outZerosGasolina = gasolina.filter(numbers => numbers > 1.50)

    const maxPriceGasolina = outZerosGasolina.reduce((a, b) => Math.max(a, b))
    const minPriceGasolina = outZerosGasolina.reduce((a, b) => Math.min(a, b))
    const averagePriceGasolina = outZerosGasolina.reduce((a, b) => a + b) / outZerosGasolina.length


    return (
        stations &&
        <div className="container bg-white rounded text-dark py-3 my-3">
            <div className="row d-flex justify-content-center">
                <div className="px-5">
                    <h1>Las gasolineras más baratas en España</h1>
                    <p>Encuentra la gasolinera que te ofrece los mejores precios del carburante en todo el país y ahorra dinero en el reostaje de tu vehículo</p>
                    <h2>El precio en las gasolineras MÁS BARATAS de España</h2>
                    <p>Saber el precio de las gasolineras más baratas en un día determinado es importante, pero determinar cuál es la estación de servicio más económica a lo largo del tiempo es algo más complicado. Por eso te hacemos llegar los precios del combustible en las gasolineras que son, de forma consistente, las estaciones de servicio más baratas del país.</p>
                    <p>Sin perder de vista la tendencia del combustible a nivel nacional, queremos hacerte llegar toda la información sobre las que consideramos las mejores estaciones de servicio del país desde el punto de vista económico y que, por tanto, ofrecen un mayor ahorro en cada repostaje de un vehículo a nivel general.</p>
                </div>
                <div className="row col-10 my-5">
                    <div className='bg-danger d-flex justify-content-center flex-column text-white text-center py-3 my-1'>
                        <h3 className=''>PRECIO MÁXIMO HOY DEL DIÉSEL</h3>
                        <p>El Precio máximo del Diésel hoy es de <span className='digital'>{maxPriceDiesel} €/l</span></p>
                    </div>
                    <div className='bg-dark d-flex justify-content-center flex-column text-white text-center py-3 my-1'>
                        <h3 className=''>PRECIO MEDIO HOY DEL DIÉSEL</h3>
                        <p>El Precio medio del Diésel hoy es de <span className='digital'>{averagePriceDiesel.toFixed(3)} €/l</span></p>
                    </div>
                    <div className='bg-success d-flex justify-content-center flex-column text-white text-center py-3 my-1'>
                        <h3 className=''>PRECIO MÍNIMO HOY DEL DIÉSEL</h3>
                        <p>El Precio mínimo del Diésel hoy es de <span className='digital'>{minPriceDiesel} €/l</span></p>
                    </div>
                </div>
                <div className="row col-10 mb-5">
                    <div className='bg-danger d-flex justify-content-center flex-column text-white text-center py-3 my-1'>
                        <h3 className=''>PRECIO MÁXIMO HOY DEL GASOLINA 95</h3>
                        <p>El Precio máximo de la gasolina 95 hoy es de <span className='digital'>{maxPriceGasolina} €/l</span></p>
                    </div>
                    <div className='bg-dark d-flex justify-content-center flex-column text-white text-center py-3 my-1'>
                        <h3 className=''>PRECIO MEDIO HOY DEL GASOLINA 95</h3>
                        <p>El Precio medio de la gasolina 95 hoy es de <span className='digital'>{averagePriceGasolina.toFixed(2)} €/l</span></p>
                    </div>
                    <div className='bg-success d-flex justify-content-center flex-column text-white text-center py-3 my-1'>
                        <h3 className=''>PRECIO MÍNIMO HOY DEL GASOLINA 95</h3>
                        <p>El Precio mínimo de la gasolina 95 hoy es de <span className='digital'>{minPriceGasolina} €/l</span></p>
                    </div>
                </div>
                <div className='px-5'>
                    <h2>
                        ¿Cuál es el precio del litro de diésel y de gasolina?
                    </h2>
                    <p>
                        El litro de diésel en España tiene HOY un coste medio de 1.979€/l y el litro de gasolina vale 1.767€/l de media.
                    </p>
                    <h2>
                        ¿Cuánto cuesta llenar un depósito de coche de media?
                    </h2>
                    <p>
                        Llenar HOY en España el depósito de un coche de diésel, cuesta de media 99€ y llenarlo de gasolina vale 88€ en término medio.
                    </p>
                    <h2>
                        ¿Cuál es la provincia con las gasolineras más baratas de España para repostar?
                    </h2>
                    <p>
                        Las gasolineras más baratas de Cantabria tienen el diésel más barato de España con un precio de 1.699€/l. La gasolina más barata en España se vende HOY a 1.547€/l y la puedes encontrar en las gasolineras más baratas de Alicante/Alacant.
                    </p>
                    <h2>
                        ¿Donde están las gasolineras más caras de España en el día de HOY?
                    </h2>
                    <p>
                        El diésel más caro en España se vende a 2.324€/l y la gasolina más cara está a 2.074€/l. Estos precios se encuentran hoy en algunas gasolineras de Bizkaia/Vizcaya.
                    </p>
                </div>

            </div>
        </div>
    )
}

export default Cheaper