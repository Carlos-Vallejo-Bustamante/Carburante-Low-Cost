import React, { useState } from 'react';

const ScrollButton = () => {

    const [visible, setVisible] = useState(false)

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
            setVisible(true)
        }
        else if (scrolled <= 300) {
            setVisible(false)
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'auto'
        });
    };

    window.addEventListener('scroll', toggleVisible);

    return (
        <button className='bg-primary rounded-bottom' onClick={scrollToTop}
            style={{ display: visible ? 'inline' : 'none', marginLeft: '95%', marginBottom: '1%', border: 'none' }}>
            <i className="bi bi-arrow-up-circle text-white"></i>
        </button>
    );
}

export default ScrollButton;
