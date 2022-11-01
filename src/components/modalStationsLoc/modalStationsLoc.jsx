import { useContext, useEffect, useState } from 'react';
import { DataContext } from '../../context/data.context';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './modalStationsLoc.css'
import Maps from '../maps/Maps';

const CityModal = () => {
    const [modalShow, setModalShow] = useState(false);
    const [hidden, setHidden] = useState(false)
    const { handlestations, stationsFiltered, cordinates } = useContext(DataContext);

    function MyVerticallyCenteredModal(props) {
        return (

            <Modal
                {...props}
                size='xl'
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton closeVariant='white' className='bg-dark'>
                    <Modal.Title id="contained-modal-title-vcenter" className='text-white'>
                        Estaciones en tu municipio
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className='bg-beig'>

                    {stationsFiltered.map((station) =>
                        <div className='bg-beig'>
                            <div key={station.Latitud} className='my-5'>
                                <p className='text-dark mb-0'><i className="bi bi-fuel-pump-fill"></i> {station.Rótulo.replaceAll('_', ' ')} EN {station.Localidad}</p>
                                <p className='text-dark'><i className="bi bi-geo-alt-fill"></i> {station.Dirección.replaceAll('_', ' ')}</p>
                                <div className="bg-secondary w-50 p-2 border border-dark border-1 mb-3 z-1">
                                    <ul className="border border-dark border-1 p-0 m-0">
                                        {station.Precio_Gasoleo_A &&
                                            <li className='d-flex justify-content-between border border-dark border-1'>
                                                <p className='bg-black text-white m-0 col-4 d-flex align-items-center justify-content-center'>D</p><p className='text-dark d-flex align-items-center justify-content-center m-0 p-1 bg-light col-5 digital'>{station.Precio_Gasoleo_A}</p><p className='text-dark d-flex align-items-center justify-content-center m-0 p-1 bg-light col-3 digital'>€/l</p>
                                            </li>
                                        }
                                        {station.Precio_Gasoleo_Premium &&
                                            <li className='d-flex justify-content-between border border-dark border-1'>
                                                <p className='bg-black text-white m-0 col-4 d-flex align-items-center justify-content-center'>D+</p><p className='text-dark d-flex align-items-center justify-content-center m-0 p-1 bg-light col-5 digital'>{station.Precio_Gasoleo_Premium}</p><p className='text-dark d-flex align-items-center justify-content-center m-0 p-1 bg-light col-3 digital'>€/l</p>
                                            </li>
                                        }
                                        {station.Precio_Gasoleo_b &&
                                            <li className='d-flex justify-content-between border border-dark border-1'>
                                                <p className='bg-black text-white m-0 col-4 d-flex align-items-center justify-content-center'>D</p><p className='text-dark d-flex align-items-center justify-content-center m-0 p-1 bg-light col-5 digital'>{station.Precio_Gasoleo_B}</p><p className='text-dark d-flex align-items-center justify-content-center m-0 p-1 bg-light col-3 digital'>€/l</p>
                                            </li>
                                        }
                                        {station.Precio_Gasolina_95_E5 &&
                                            <li className='d-flex justify-content-between border border-dark border-1'>
                                                <p className='bg-success text-white m-0 col-4 d-flex align-items-center justify-content-center'>SP95</p><p className='text-dark d-flex align-items-center justify-content-center m-0 p-1 bg-light col-5 digital'>{station.Precio_Gasolina_95_E5}</p><p className='text-dark d-flex align-items-center justify-content-center m-0 p-1 bg-light col-3 digital'>€/l</p>
                                            </li>
                                        }
                                        {station.Precio_Gasolina_98_E5 &&
                                            <li className='d-flex justify-content-between border border-dark border-1'>
                                                <p className='bg-success text-white m-0 col-4 d-flex align-items-center justify-content-center'>SP98</p><p className='text-dark d-flex align-items-center justify-content-center m-0 p-1 bg-light col-5 digital'>{station.Precio_Gasolina_98_E5}</p><p className='text-dark d-flex align-items-center justify-content-center m-0 p-1 bg-light col-3 digital'>€/l</p>
                                            </li>
                                        }
                                        {station.Precio_Gases_licuados_del_petróleo &&
                                            <li className='d-flex justify-content-between border border-dark border-1'>
                                                <p className='background-orange text-white m-0 col-4 d-flex align-items-center justify-content-center'>GLP</p><p className='text-dark d-flex align-items-center justify-content-center m-0 p-1 bg-light col-5 digital'>{station.Precio_Gases_licuados_del_petróleo}</p><p className='text-dark d-flex align-items-center justify-content-center m-0 p-1 bg-light col-3 digital'>€/kg</p>
                                            </li>
                                        }
                                    </ul>
                                </div>
                            </div>
                            <div>
                                <Maps station={station} />
                            </div>
                        </div>
                    )}

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="dark" onClick={props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal >
        )
    }

    const activeModal = () => {
        setModalShow(true)
        handlestations()
    }

    useEffect(() => {
        setTimeout(() => {
            setHidden(true)
        }, 3000)
    }, [])

    return (
        <>
            {
                hidden && cordinates.longitude !== 0 ?
                    <>
                        <div className='bg-dark text-success py-3 d-flex justify-content-center' onClick={activeModal}>
                            <i className="bi bi-compass"></i> CLICK PARA VER GASOLINERAS MÁS CERCANAS...
                        </div>
                        <MyVerticallyCenteredModal
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                        />
                    </>
                    : hidden &&
                    <div className='bg-dark text-primary py-3 d-flex justify-content-center' onClick={activeModal}>
                        <i className="bi bi-compass"></i> ACTIVA LA GEOLOCALIZACIÓN PARA VER LAS GASOLINERAS MÁS CERCANAS
                    </div>
            }
        </>
    )

}

export default CityModal;