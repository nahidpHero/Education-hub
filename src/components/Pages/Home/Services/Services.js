import React, { useEffect, useState } from 'react';
import Service from './Service';
import './Services.css'


const Services = () => {
    const [services,setServices]=useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])


    return (
        <div id='services' className='container my-5'>
            <div className='text-center'>
                <h2 className='text-uppercase service-title'>my programs </h2>
                <p className='fs-4 fst-italic'>Make a difference in the life of a child with a need</p>
                <div className='row  mx-0 '>
                {
                   services.map(service=><Service
                   key={service._id}
                   service={service}
                   ></Service>)
                }
            </div>
            </div>
        </div>
    );
};

export default Services;