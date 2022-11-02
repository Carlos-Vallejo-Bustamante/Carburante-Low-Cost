import React from 'react'
import { Link } from 'react-router-dom'
import CityModal from '../modalStationsLoc/modalStationsLoc'

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-dark">
                <div className="container-fluid ms-3">
                    <Link className="navbar-brand text-white" to="/">Carburante Low Cost</Link>
                    <button className="navbar-toggler border-success" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse ms-5" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active text-white" aria-current="page" to='/gasolineras-mas-baratas-en-espana'>Precio Medio</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <CityModal />
        </>
    )
}

export default Navbar;

