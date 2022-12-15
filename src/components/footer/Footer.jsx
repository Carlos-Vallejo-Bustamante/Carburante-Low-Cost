import { Link } from 'react-router-dom'
import '../../App.css'

const FooterComponent = () => {
    return (
        <footer className='container bg-white text-dark p-3 my-2 rounded'>
            <div className='row'>
                <div className='d-flex d-flex justify-content-center'>
                    <p>© 2022 | Desarrollado por Carlos Vallejo</p>
                    <Link target="_blank" component="a" href="https://github.com/Carlos-Vallejo-Bustamante"><i className="bi bi-github mx-2"></i></Link>
                    <Link target="_blank" component="a" href="https://www.linkedin.com/in/carlos-vallejo-bustamante/"><i className="bi bi-linkedin mx-2"></i></Link>
                </div>
            </div>
        </footer>
    );
};

export default FooterComponent;