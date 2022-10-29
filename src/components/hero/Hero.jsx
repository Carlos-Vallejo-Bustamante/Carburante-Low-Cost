import React from 'react'
import './Hero.css'
import CarouselPrice from '../carouselPrice/CarouselPrice'

const Hero = () => {
    return (
        <div className='hero row d-flex justify-content-center align-items-center mb-5'>
            <div className="col-8 text-white text-center">
                <h1 className='my-5 text-center shadowMe'>ENCUENTRA LA GASOLINERA MÁS BARATA CERCA DE TI</h1>
            </div>
            <CarouselPrice />
        </div>
    )
}

export default Hero