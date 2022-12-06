import React from 'react';
import { Link } from 'react-router-dom';
import './FooterButton.css'

const FooterButton = () => {
    const currentYear = new Date().getFullYear()
    return (
        
    
        <div className='container my-3'>
            <div className="footer-bottom">
                <div className="terms-condition">
                    <Link to='/'>privacy policy</Link>
                    <Link to='/'>terms of use</Link>
                    <Link to='/'>pricing</Link>
                </div>
                <div className="copy-right">
                    <p>Copyright © {currentYear} 
                        <Link to='/' > Education Hub   </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default FooterButton;