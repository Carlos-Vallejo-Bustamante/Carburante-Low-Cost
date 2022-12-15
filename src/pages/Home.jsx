import React, { Fragment } from 'react'
import Hero from '../components/hero/Hero'
import Provinces from '../components/provinces/Provinces'
function Home() {

    const title = 'ENCUENTRA LA GASOLINERA MÁS BARATA CERCA DE TI'

    return (
        <Fragment>
            <Hero title={title} />
            <div className='container rounded bg-white text-dark py-5 my-5'>
                <div className='row'>
                    <h2 className='text-center mb-3'>Listado de las gasolineras más baratas HOY en España</h2>
                    <p>Ahorra dinero en el llenado de tu vehículo repostando en la gasolinera más barata de tu localidad. En nuestro CarbuRanking encontrarás los mejores precios de las estaciones de servicio de España</p>
                </div>
            </div>
            <Provinces />
            <div className='container'>
                <div className='row'>
                    <p className='bg-white text-dark py-5 rounded'>
                        CarburanteLowCost es la web con los precios más actualizados de todas las estaciones de servicio del país. Podrás encontrar las <b>gasolineras más baratas, las más cercanas a ti, por marca o bandera, abiertas 24 horas, gasolineras cerca de estaciones de tren, en las inmediaciones de los aeropuertos del país, cerca de playas, estadios de fútbol, pabellones deportivos ¡y más!</b>. Te informamos sobre los datos más relevante del coste de tu combustible favorito a nivel local, regional y estatal.
                        Todos nuestros precios se actualizan automáticamente a partir de la información disponible, publicada por el Ministerio de Industria, Comercio y Turismo.
                    </p>
                </div>
            </div>
        </Fragment>
    )
}

export default Home