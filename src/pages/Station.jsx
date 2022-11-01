// import { React, useContext, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import Maps from '../components/maps/Maps';
// import { DataContext } from '../context/data.context';
// // import Iframe from 'react-iframe'


// const Station = () => {
//     const { handlestationsFiltereds, stationsFiltered, cordinates } = useContext(DataContext);
//     const { stationId } = useParams();

//     const url = stationId.split('-')
//     const idUrl = url[url.length - 1]

//     console.log('ESTACIOONNN', stationsFiltered);


//     console.log('PAGEEEEE', idUrl);

//     const stationClean = stationsFiltered.filter((station) => console.log('AQUIIIIIII', station.Dirección.split('_')[station.Dirección.length - 1].includes(idUrl)))

//     console.log('ESTACIOONNN', stationClean);

//     return (
//         <div className="container">
//             <div className='bg-dark'>
//                 <h1 id="contained-modal-title-vcenter" className='text-white'>
//                     <span>{stationsFiltered.Rótulo} {stationsFiltered.Municipio}</span>   {stationsFiltered.Horario.includes('24H') && <span className='text-success'>Gasolinera abierta 24H</span>}
//                 </h1>
//             </div>
//             <div>
//                 <p className='text-dark'> <i className="bi bi-geo-alt-fill"></i> {stationsFiltered.Dirección.replaceAll('_', ' ')}</p>
//                 <p className='text-dark'> <i className="bi bi-clock-fill"></i> {stationsFiltered.Horario.replaceAll('_', ' ')}</p>
//                 <p className='text-dark'> <i className="bi bi-fuel-pump-fill"></i> Vende {stationsFiltered.Precio_Gasoleo_A && 'Diésel |'}
//                     {stationsFiltered.Precio_Gasoleo_Premium && ' Diésel Premium |'}
//                     {stationsFiltered.Precio_Gasoleo_B && ' Gasóleo B |'}
//                     {stationsFiltered.Precio_Gasolina_95_E5 && ' Gasolina sin plomo 95 |'}
//                     {stationsFiltered.Precio_Gasolina_98_E5 && ' Gasolina sin plomo 98 |'}
//                     {stationsFiltered.Precio_Gases_licuados_del_petróleo && ' Gases licuados petróleo'}</p>
//                 <div className="bg-secondary w-50 p-2 border border-dark border-1 mb-3 z-1">
//                     <ul className="border border-dark border-1 p-0 m-0">
//                         {stationsFiltered.Precio_Gasoleo_A &&
//                             <li className='d-flex justify-content-between border border-dark border-1'>
//                                 <p className='bg-black text-white m-0 col-4 d-flex align-items-center justify-content-center'>D</p><p className='text-dark d-flex align-items-center justify-content-center m-0 p-1 bg-light col-5 digital'>{stationsFiltered.Precio_Gasoleo_A}</p><p className='text-dark d-flex align-items-center justify-content-center m-0 p-1 bg-light col-3 digital'>€/l</p>
//                             </li>
//                         }
//                         {stationsFiltered.Precio_Gasoleo_Premium &&
//                             <li className='d-flex justify-content-between border border-dark border-1'>
//                                 <p className='bg-black text-white m-0 col-4 d-flex align-items-center justify-content-center'>D+</p><p className='text-dark d-flex align-items-center justify-content-center m-0 p-1 bg-light col-5 digital'>{stationsFiltered.Precio_Gasoleo_Premium}</p><p className='text-dark d-flex align-items-center justify-content-center m-0 p-1 bg-light col-3 digital'>€/l</p>
//                             </li>
//                         }
//                         {stationsFiltered.Precio_Gasoleo_b &&
//                             <li className='d-flex justify-content-between border border-dark border-1'>
//                                 <p className='bg-black text-white m-0 col-4 d-flex align-items-center justify-content-center'>D</p><p className='text-dark d-flex align-items-center justify-content-center m-0 p-1 bg-light col-5 digital'>{stationsFiltered.Precio_Gasoleo_B}</p><p className='text-dark d-flex align-items-center justify-content-center m-0 p-1 bg-light col-3 digital'>€/l</p>
//                             </li>
//                         }
//                         {stationsFiltered.Precio_Gasolina_95_E5 &&
//                             <li className='d-flex justify-content-between border border-dark border-1'>
//                                 <p className='bg-success text-white m-0 col-4 d-flex align-items-center justify-content-center'>SP95</p><p className='text-dark d-flex align-items-center justify-content-center m-0 p-1 bg-light col-5 digital'>{stationsFiltered.Precio_Gasolina_95_E5}</p><p className='text-dark d-flex align-items-center justify-content-center m-0 p-1 bg-light col-3 digital'>€/l</p>
//                             </li>
//                         }
//                         {stationsFiltered.Precio_Gasolina_98_E5 &&
//                             <li className='d-flex justify-content-between border border-dark border-1'>
//                                 <p className='bg-success text-white m-0 col-4 d-flex align-items-center justify-content-center'>SP98</p><p className='text-dark d-flex align-items-center justify-content-center m-0 p-1 bg-light col-5 digital'>{stationsFiltered.Precio_Gasolina_98_E5}</p><p className='text-dark d-flex align-items-center justify-content-center m-0 p-1 bg-light col-3 digital'>€/l</p>
//                             </li>
//                         }
//                         {stationsFiltered.Precio_Gases_licuados_del_petróleo &&
//                             <li className='d-flex justify-content-between border border-dark border-1'>
//                                 <p className='background-orange text-white m-0 col-4 d-flex align-items-center justify-content-center'>GLP</p><p className='text-dark d-flex align-items-center justify-content-center m-0 p-1 bg-light col-5 digital'>{stationsFiltered.Precio_Gases_licuados_del_petróleo}</p><p className='text-dark d-flex align-items-center justify-content-center m-0 p-1 bg-light col-3 digital'>€/kg</p>
//                             </li>
//                         }




//                     </ul>
//                 </div>
//                 <Maps stationsFiltered={stationsFiltered} />
//             </div>
//         </div>

//     );

// }

// export default Station;