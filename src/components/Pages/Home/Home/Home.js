import React from 'react';
import Banner from '../Banner/Banner';
import HelpCare from '../HelpCare/HelpCare';
import Services from '../Services/Services';
import TestiMonials from './TestiMonials/TestiMonials';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HelpCare></HelpCare>
            <Services></Services>
            <TestiMonials></TestiMonials>    
        </div>
    );
};

export default Home;