import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/Navbar';
import ScrollButton from './components/scrollButton/ScrollButton';
import FooterComponent from './components/footer/Footer';
import Cheaper from './pages/Cheaper';
import Home from './pages/Home';


function App() {

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/gasolineras-mas-baratas-en-espana' element={<Cheaper />} />
      </Routes>
      <ScrollButton />
      <FooterComponent />
    </div>
  );
}

export default App;
