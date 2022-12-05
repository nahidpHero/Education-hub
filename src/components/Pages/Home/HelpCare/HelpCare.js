import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import './HelpCare.css'
import img1 from '../../../../images/bonus/img1.jpg'
import img2 from '../../../../images/bonus/img2.jpg'



AOS.init();
const HelpCare = () => {
    return (
        <div  className='help-care-bg'
                         data-aos="fade-down"
                            data-aos-easing="linear"
                            data-aos-duration="">
            <h1 className='text-center pt-5 pb-4 '>HOW I HELP STUDENT</h1>
            <h3 className='fs-4 fst-italic  pb-5 text-center'>I work individually with each <br /> family to
                understand their specific needs
            </h3>
            <div className="container">
                <div className="row g-3">
                    <div className="col-md-6">
                        <div data-aos="fade-down"
                            data-aos-easing="linear"
                            data-aos-duration="1500" className="help-container">
                            <div className='text-center mb-4'>
                                <img className='w-100 help-img' src={img1} alt="" />
                            </div>
                            <div className=" ">
                                <h2 className='fs-3 fst-italic text-center pb-2'>Educate</h2>
                                <p className='text-center fs-5 ps-2'>I strive to improve the lives of my students through education of Academic, Behavioral, Cognitive, and Social Skills form real friendships</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div data-aos="fade-down"
                            data-aos-easing="linear"
                            data-aos-duration="1500" className="help-container">
                            <div className='text-center mb-4'>
                                <img className='w-100 help-img' src={img2} alt="" />
                            </div>
                            <div className=" ">
                                <h2 className='fs-3 fst-italic text-center pb-2'>Inspire</h2>
                                <p className='text-center fs-5'>It is important to have teachers & therapists engaging students to learn and parents involved in both student programs and school activities</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default HelpCare;