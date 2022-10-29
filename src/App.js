import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Provinces from './components/provinces/Provinces';
import CardGasStation from './components/cardGasStation/CardGasStation';
import ScrollButton from './components/scrollButton/ScrollButton';


function App() {

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Provinces />} />
        <Route path='/:gasstationid' element={<CardGasStation />} />
      </Routes>
      <div className='container'>
        <div className='row'>
          <p className='bg-white text-dark py-5 rounded'>
            CarburanteLowCost es la web con los precios más actualizados de todas las estaciones de servicio del país. Podrás encontrar las <b>gasolineras más baratas, las más cercanas a ti, por marca o bandera, abiertas 24 horas, gasolineras cerca de estaciones de tren, en las inmediaciones de los aeropuertos del país, cerca de playas, estadios de fútbol, pabellones deportivos ¡y más!</b>. Te informamos sobre los datos más relevante del coste de tu combustible favorito a nivel local, regional y estatal.
            Todos nuestros precios se actualizan automáticamente a partir de la información disponible, publicada por el Ministerio de Industria, Comercio y Turismo.
          </p>
        </div>
      </div>
      <ScrollButton />
    </div>
  );
}

export default App;
