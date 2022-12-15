import React from 'react'
import './Hero.css'

const Hero = ({ title }) => {

    return (

        <header className='hero row d-flex justify-content-center align-items-center mb-5'>
            <div className="col-8 text-white text-center">
                <h1 className='my-5 text-center shadowMe'>{title}</h1>
            </div>
        </header>
    )
}

export default Hero