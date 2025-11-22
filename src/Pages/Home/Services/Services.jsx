import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Services = () => {
    const [ services, setServices] = useState([])
    useEffect(() => {
        axios('/services.json').then(data => setServices(data.data))
    }, [])

    return (
        <div className='bg-secondary p-16 rounded-[0.7rem]' >
            <h2 className='text-center font-bold text-white text-[2rem]'>Our Services</h2>
            <p className='mx-auto text-center w-[60%] text-white my-6'>Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.</p>
            <div className='grid md:grid-cols-3 gap-6'>
                {
                    services.map((service, index) => 
                        <div key={index} className='flex flex-col justify-center items-center p-4 rounded-[0.7rem] bg-white '>
                            <img src={service.image} alt="" />
                            <h2 className='text-center text-secondary font-semibold my-2 text-[1.2rem]'>{service.title}</h2>
                            <p className='text-center'>{service.description}</p>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Services;