import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className='header py-3 d-flex justify-content-between align-items-center px-1'>
            <h2>Mosabbir's Dairy</h2>
            <img src="mosabbir.jpg" alt="" />
        </div>
    );
};

export default Header;