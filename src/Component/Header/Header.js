import React from 'react';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css'

const Header = () => {
    return (
        <nav className='nav-container'>
            <div className='container d-flex justify-content-between align-items-center'>
                <img style={{ width: '70px' }} src="https://templatekit.jegtheme.com/icelab/wp-content/uploads/sites/175/2021/09/logo-new-e1633071394901.png" alt="" />
                <div className='d-flex justify-content-between align-items-center'>
                    <CustomLink className='link' to="/">HOME</CustomLink>
                    <CustomLink className="link" to="/reviews">REVIEWS</CustomLink>
                    <CustomLink className="link" to="/dashboard">DASHBOARD</CustomLink>
                    <CustomLink className="link" to="/blogs">BLOGS</CustomLink>
                    <CustomLink className="link" to="/about">ABOUT</CustomLink>

                </div>
            </div>
        </nav>
    );
};

export default Header;