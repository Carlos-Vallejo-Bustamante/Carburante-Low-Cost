import { React, useState } from 'react';
// import Iframe from 'react-iframe'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import '../CardAllGasStation.css'
import Maps from '../maps/Maps';


const CardGasStation = ({ station }) => {
    const [modalShow, setModalShow] = useState(false);

    function MyVerticallyCenteredModal(props) {
        const { station } = props
        return (
            <Modal
                {...props}
                size="xl"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton closeVariant='white' className='bg-dark'>
                    <Modal.Title id="contained-modal-title-vcenter" className='text-white'>
                        <span>{station.Rótulo} {station.Municipio}</span>   {station.Horario.includes('24H') && <span className='text-success'>Gasolinera abierta 24H</span>}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p className='text-dark'> <i className="bi bi-geo-alt-fill"></i> {station.Dirección.replaceAll('_', ' ')}</p>
                    <p className='text-dark'> <i className="bi bi-clock-fill"></i> {station.Horario.replaceAll('_', ' ')}</p>
                    <p className='text-dark'> <i className="bi bi-fuel-pump-fill"></i> Vende {station.Precio_Gasoleo_A && 'Diésel |'}
                        {station.Precio_Gasoleo_Premium && ' Diésel Premium |'}
                        {station.Precio_Gasoleo_B && ' Gasóleo B |'}
                        {station.Precio_Gasolina_95_E5 && ' Gasolina sin plomo 95 |'}
                        {station.Precio_Gasolina_98_E5 && ' Gasolina sin plomo 98 |'}
                        {station.Precio_Gases_licuados_del_petróleo && ' Gases licuados petróleo'}</p>
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
                    <Maps station={station} />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="dark" onClick={props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal >
        );
    }

    return (
        <>
            <Button variant="dark" onClick={() => setModalShow(true)}>
                Más Detalles
            </Button>

            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                station={station}
            />
        </>
    );

}

export default CardGasStation