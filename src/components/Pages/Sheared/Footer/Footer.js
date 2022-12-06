import React from 'react';
import FooterButton from './FooterButton/FooterButton';
import FooterHeder from './FooterHeader/FooterHeder';

const Footer = () => {
    return (
        <div className='py-4 bg-dark text-light'>
            <FooterHeder></FooterHeder>
            <FooterButton></FooterButton>
        </div>
    );
};

export default Footer;