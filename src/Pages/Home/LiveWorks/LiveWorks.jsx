import axios from 'axios';
import React, { useEffect, useState } from 'react';

const LiveWorks = () => {
    const [ works, setWorks] = useState([])
    useEffect(() => {
        axios('/liveWorks.json').then(data => setWorks(data.data))
    }, [])
    return (
        <div className='grid gap-6'>
            {
                works.map((work,index) => 
                <div key={index} className='flex justify-between items-center p-6 rounded-[0.7rem] bg-white'> 
                    <div className='w-[25%]'><img className=' border-r border-dashed pr-10' src={work.image_url} alt="" /></div>
                    <div className='w-[85%]'>
                        <h2 className='text-secondary font-semibold mb-2 text-[1.4rem]'>{work.title}</h2>
                        <p className='text-[1.1rem]'>{work.description}</p>
                    </div>
                </div>)
            }
        </div>
    );
};

export default LiveWorks;
