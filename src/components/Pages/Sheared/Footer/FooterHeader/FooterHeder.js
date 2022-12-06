import React from 'react';
import { Link } from 'react-router-dom';
import './FooterHeder.css'
import logo from '../../../../../images/logo.svg'

const FooterHeder = () => {
    return (
        <div className='container  pb-5'>
        <div className="row">
            <div className="col-md-4 col-sm-12">
                <div className='mt-5 logo text-center'>
                    <Link to='/'><img className='w-50' src={logo} alt="" /></Link>
                </div>
            </div>
            <div className="col-md-8 col-sm-12 ">
                <div className="row mt-3">
                    <div className="col-md-6 col-sm-6 d-flex justify-content-center">
                        <div className='important-link'>
                            <Link to='/about'>About Me</Link>
                            <Link to='/blog'>Read Blog</Link>
                            <Link to='/signup'>Sign Up </Link>
                            <Link to='/youtube'> My YouTube</Link>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-6 d-flex justify-content-center">
                        <div className='important-link'>
                            <Link to='/help'>get help</Link>
                            <Link to='/faq'>read FAQs</Link>
                            <Link to='/home#services'>view all services</Link>
                            <Link to='/contact'>contact me</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default FooterHeder;