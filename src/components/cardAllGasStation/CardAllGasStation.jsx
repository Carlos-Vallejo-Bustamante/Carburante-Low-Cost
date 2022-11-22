import { React, useEffect, useState } from 'react';
import '../CardAllGasStation.css';
import CardGasStation from '../cardGasStation/CardGasStation';
import Spinn from '../spinner/Spinner';

const CardAllGasStationProvider = ({ stationsSortGas, stationsSort95, city, date }) => {
    const [listStationGas, setListStationGas] = useState([])
    const [listStation95, setListStation95] = useState([])
    const [colorSelectedGas, setColorSelectedGas] = useState('yellow')
    const [colorSelected95, setColorSelected95] = useState('yellow')
    const [clickedGas, setClickedGas] = useState(true)
    const [clicked95, setClicked95] = useState(true)
    const [liters, setliters] = useState(1)

    useEffect(() => {
        setListStationGas(stationsSortGas)
        setListStation95(stationsSort95)
    }, [stationsSort95, stationsSortGas])


    const handleSortUpPriceGasoleo = () => {
        const sortGasoleo = listStationGas.filter((stationfiltered) => stationfiltered.Precio_Gasoleo_A !== '' && stationfiltered.Precio_Gasolina_95_E5 !== '')
        sortGasoleo.sort((a, b) => +a.Precio_Gasoleo_A.replaceAll(',', '.') - +b.Precio_Gasoleo_A.replaceAll(',', '.'))

        setListStationGas(sortGasoleo)
        setClickedGas(true)
    }

    const handleSortUpPriceGasolina = () => {
        const sortGasolina = listStationGas.filter((stationfiltered) => stationfiltered.Precio_Gasoleo_A !== '' && stationfiltered.Precio_Gasolina_95_E5 !== '')
        sortGasolina.sort((a, b) => +a.Precio_Gasolina_95_E5.replaceAll(',', '.') - +b.Precio_Gasolina_95_E5.replaceAll(',', '.'))

        setListStation95(sortGasolina)
        setClicked95(true)
        setColorSelected95('yellow')
    }

    const handleSortDownPriceGasoleo = () => {
        const sortGasoleo = listStationGas.filter((stationfiltered) => stationfiltered.Precio_Gasoleo_A !== '' && stationfiltered.Precio_Gasolina_95_E5 !== '')
        sortGasoleo.sort((a, b) => +b.Precio_Gasoleo_A.replaceAll(',', '.') - +a.Precio_Gasoleo_A.replaceAll(',', '.'))

        setListStationGas(sortGasoleo)
        setClickedGas(false)
        setColorSelectedGas('yellow')
    }

    const handleSortDownPriceGasolina = () => {
        const sortGasolina = listStationGas.filter((stationfiltered) => stationfiltered.Precio_Gasoleo_A !== '' && stationfiltered.Precio_Gasolina_95_E5 !== '')
        sortGasolina.sort((a, b) => +b.Precio_Gasolina_95_E5.replaceAll(',', '.') - +a.Precio_Gasolina_95_E5.replaceAll(',', '.'))

        setListStation95(sortGasolina)
        setClicked95(false)
        setColorSelected95('yellow')
    }

    const calculatePrice = ({ target }) => {
        const number = target.value
        setliters(number)
        number.length === 0 && setliters(1)
    };

    const logoStation = (logos) => {
        switch (logos) {
            case 'REPSOL':
                return <img className='logo-stations' src="images/repsol.webp" alt="gasolinera repsol" />

            case 'CEPSA':
                return <img className='logo-stations' src="images/cepsa.webp" alt="gasolinera cepsa" />

            case 'BP':
                return <img className='logo-stations' src="images/bp.webp" alt="gasolinera bp" />

            case 'ALCAMPO':
                return <img className='logo-stations' src="images/alcampo.webp" alt="gasolinera alcampo" />

            case 'AVIA':
                return <img className='logo-stations' src="images/avia.webp" alt="gasolinera avia" />

            case 'BALLENOIL':
                return <img className='logo-stations' src="images/ballenoil.webp" alt="gasolinera ballenoil" />

            case 'BEROIL':
                return <img className='logo-stations' src="images/beroil.webp" alt="gasolinera beroil" />

            case 'CAMPSA':
                return <img className='logo-stations' src="images/campsa.webp" alt="gasolinera campsa" />

            case 'CARREFOUR':
                return <img className='logo-stations' src="images/carrefour.webp" alt="gasolinera carrefour" />

            case 'COSTCO':
                return <img className='logo-stations' src="images/costco.webp" alt="gasolinera costco" />

            case 'DST':
                return <img className='logo-stations' src="images/dst.webp" alt="gasolinera dst" />

            case 'EROSKI':
                return <img className='logo-stations' src="images/eroski.webp" alt="gasolinera eroski" />

            case 'GACOSUR':
                return <img className='logo-stations' src="images/gacosur.webp" alt="gasolinera gacosur" />

            case 'GALP':
                return <img className='logo-stations' src="images/galp.webp" alt="gasolinera galp" />

            case 'GASEXPRESS':
                return <img className='logo-stations' src="images/gasexpress.webp" alt="gasolinera gasexpress" />

            case 'LECLERC':
                return <img className='logo-stations' src="images/leclerc.webp" alt="gasolinera leclerc" />

            case 'MEROIL':
                return <img className='logo-stations' src="images/meroil.webp" alt="gasolinera meroil" />

            case 'PETROCAT':
                return <img className='logo-stations' src="images/petrocat.webp" alt="gasolinera petrocat" />

            case 'PETROPRIX':
                return <img className='logo-stations' src="images/petroprix.webp" alt="gasolinera petroprix" />

            case 'PLENOIL':
                return <img className='logo-stations' src="images/plenoil.webp" alt="gasolinera plenoil" />

            case 'Q8':
                return <img className='logo-stations' src="images/q8.webp" alt="gasolinera q8" />

            case 'SHELL':
                return <img className='logo-stations' src="images/shell.webp" alt="gasolinera shell" />

            case 'TAMOIL':
                return <img className='logo-stations' src="images/tamoil.webp" alt="gasolinera tamoil" />

            case 'VALCARCE':
                return <img className='logo-stations' src="images/valcarce.webp" alt="gasolinera valcarce" />

            default:
                return <img className='logo-stations' src="images/manguera.webp" alt="gasolinera manguera" />

        }
    }


    return (
        <>
            <div className="mb-5">
                {listStationGas && listStationGas.length !== 0 ?
                    <>
                        <h2 className='my-5 text-center'>Precios de Gasolineras en {city} a {date}</h2>
                        <div className='d-flex justify-content-around align-items-center flex-column flex-md-row mb-3 bg-dark text-white py-3 rounded'>
                            <p className='text-center col-12 col-md-7 col-lg-7'><i className="bi bi-calculator-fill"></i> Introduce los litros de tu depósito para calcular cuánto te costaría llenarlo.</p>
                            <input className='col-10 col-md-3 col-lg-3 rounded border border-success' type='Number' placeholder='litros' name='liters' onChange={calculatePrice} />
                        </div>
                        <div className="list-group">
                            <div className="text-white row">
                                <div className="col bg-dark me-0 me-sm-1 me-md-2 me-lg-3 me-xl-4 me-xxl-5 py-3 rounded-top">
                                    <div className="bg-dark" key={'Gasoleo'}>
                                        <p className="mb-1">Diésel</p>
                                        <i className="bi bi-caret-up-fill pointer" style={clickedGas ? { color: colorSelectedGas } : null} onClick={handleSortUpPriceGasoleo}></i>
                                        <i className="bi bi-caret-down-fill pointer" style={clickedGas ? null : { color: colorSelectedGas }} onClick={handleSortDownPriceGasoleo}></i>
                                        {listStationGas && listStationGas
                                            .map((station) =>

                                                <div className="col bg-dark pb-2" key={station.IDEESS}>
                                                    <div className="list-group-item list-group-item-action" aria-current="true">
                                                        <div className="d-flex w-100 justify-content-between">
                                                            <h5 className="mb-1">{
                                                                logoStation(station.Rótulo.replaceAll('_', ' '))
                                                            }</h5>
                                                            {station.Precio_Gasoleo_A === '' ? <small>Sin surtidor</small>
                                                                : <small className='digital'>{(station.Precio_Gasoleo_A.replaceAll(',', '.') * liters).toFixed(3)} €/l</small>
                                                            }
                                                        </div>
                                                        <div className="d-flex flex-column">
                                                            <small className='d-flex justify-content-center'><b>{station.Rótulo.replaceAll('_', ' ')}</b></small>
                                                            <p className="mb-1 h6 d-flex justify-content-center">{station.Dirección.replaceAll("_", " ")}</p>
                                                            <small className='h6 d-flex justify-content-center mb-3'>{city}({station.Provincia.toLowerCase()})</small>
                                                            <CardGasStation station={station} />
                                                        </div>

                                                    </div>
                                                </div>
                                            )}
                                    </div>
                                </div>
                                <div className="col bg-success py-3 rounded-top">
                                    <div className="bg-success" key={'Gasolina'}>
                                        <p className="mb-1">Gasolina sin plomo 95</p>
                                        <i className="bi bi-caret-up-fill pointer" style={clicked95 ? { color: colorSelected95 } : null} onClick={handleSortUpPriceGasolina}></i>
                                        <i className="bi bi-caret-down-fill pointer" style={clicked95 ? null : { color: colorSelected95 }} onClick={handleSortDownPriceGasolina}></i>
                                        {listStationGas && listStation95
                                            .map((station) =>
                                                <div className="col bg-success pb-2" key={station.IDEESS + 1}>
                                                    <div className="list-group-item list-group-item-action" aria-current="true">
                                                        <div className="d-flex w-100 justify-content-between">
                                                            <h5 className="mb-1">{
                                                                logoStation(station.Rótulo)
                                                            }</h5>
                                                            {station.Precio_Gasolina_95_E5 === '' ? <small>Sin surtidor</small>
                                                                : <small className='digital'>{(+station.Precio_Gasolina_95_E5.replaceAll(',', '.') * liters).toFixed(3)} €/l</small>
                                                            }
                                                        </div>
                                                        <div className="d-flex flex-column">
                                                            <small className='d-flex justify-content-center'><b>{station.Rótulo.replaceAll('_', ' ')}</b></small>
                                                            <p className="mb-1 h6 d-flex justify-content-center">{station.Dirección.replaceAll("_", " ")}</p>
                                                            <small className='h6 d-flex justify-content-center mb-3'>{city}({station.Provincia.toLowerCase()})</small>
                                                            <CardGasStation station={station} />
                                                        </div>
                                                    </div>
                                                </div>)}
                                    </div>
                                </div>
                            </div>

                            {/* {listStationGas && listStationGas
                                .map((station) =>
                                    <div className='row' key={station.IDEESS}>
                                        <div className="col bg-dark pb-2 me-0 me-sm-1 me-md-2 me-lg-3 me-xl-4 me-xxl-5">
                                            <div className="list-group-item list-group-item-action" aria-current="true">
                                                <div className="d-flex w-100 justify-content-between">
                                                    <h5 className="mb-1">{
                                                        logoStation(station.Rótulo.replaceAll('_', ' '))
                                                    }</h5>
                                                    {station.Precio_Gasoleo_A === '' ? <small>Sin surtidor</small>
                                                        : <small className='digital'>{(station.Precio_Gasoleo_A.replaceAll(',', '.') * liters).toFixed(3)} €/l</small>
                                                    }
                                                </div>
                                                <div className="d-flex flex-column">
                                                    <small className='d-flex justify-content-center'><b>{station.Rótulo.replaceAll('_', ' ')}</b></small>
                                                    <p className="mb-1 h6 d-flex justify-content-center">{station.Dirección.replaceAll("_", " ")}</p>
                                                    <small className='h6 d-flex justify-content-center mb-3'>{city}({station.Provincia.toLowerCase()})</small>
                                                    <CardGasStation station={station} />
                                                </div>

                                            </div>
                                        </div>

                                        <div className="col bg-success pb-2">
                                            <div className="list-group-item list-group-item-action" aria-current="true">
                                                <div className="d-flex w-100 justify-content-between">
                                                    <h5 className="mb-1">{
                                                        logoStation(station.Rótulo)
                                                    }</h5>
                                                    {station.Precio_Gasolina_95_E5 === '' ? <small>Sin surtidor</small>
                                                        : <small className='digital'>{(+station.Precio_Gasolina_95_E5.replaceAll(',', '.') * liters).toFixed(3)} €/l</small>
                                                    }
                                                </div>
                                                <div className="d-flex flex-column">
                                                    <small className='d-flex justify-content-center'><b>{station.Rótulo.replaceAll('_', ' ')}</b></small>
                                                    <p className="mb-1 h6 d-flex justify-content-center">{station.Dirección.replaceAll("_", " ")}</p>
                                                    <small className='h6 d-flex justify-content-center mb-3'>{city}({station.Provincia.toLowerCase()})</small>
                                                    <CardGasStation station={station} />
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                )} */}
                        </div>
                    </>
                    : city && <div className='d-flex justify-content-center my-5'><Spinn /></div>
                }

            </div >
        </>

    )
}

export default CardAllGasStationProvider;