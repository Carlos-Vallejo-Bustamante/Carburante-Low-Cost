import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/Navbar';
import ScrollButton from './components/scrollButton/ScrollButton';
import FooterComponent from './components/footer/Footer';
import Cheaper from './pages/Cheaper';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Profile from './pages/Profile';
import EditProfile from './pages/EditProfile';
import OpenAi from './pages/OpenAi';
import Prueba from './pages/Prueba';


function App() {

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/gasolineras-mas-baratas-en-espana' element={<Cheaper />} />
        <Route path='/login' element={<Login />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/edit-profile' element={<EditProfile />} />
        <Route path='/open' element={<OpenAi />} />
        <Route path='/prueba' element={<Prueba />} />
      </Routes>
      <ScrollButton />
      <FooterComponent />
    </div>
  );
}

export default App;
