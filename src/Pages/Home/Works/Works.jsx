import React from 'react';

const works = [
  {
    "title": "Booking Pick & Drop",
    "description": "Quickly book and deliver your personal or business packages through us, ensuring timely pickup and delivery every time.",
    "image_url": "https://i.ibb.co.com/3YhMNFvB/booking-Icon.png"
  },
  {
    "title": "Cash On Delivery",
    "description": "The convenience of paying upon receipt of the item. From personal packages to business shipments, we deliver on time, every time.",
    "image_url": "https://i.ibb.co.com/3YhMNFvB/booking-Icon.png"
  },
  {
    "title": "Delivery Hub",
    "description": "Easily send and receive parcels through your nearest Delivery Hub. Reliable service for both personal and business shipments.",
    "image_url": "https://i.ibb.co.com/3YhMNFvB/booking-Icon.png"
  },
  {
    "title": "Booking SME & Corporate",
    "description": "Specialized booking facility for Small and Medium Enterprises (SME) and corporate shipments. Timely delivery is our commitment.",
    "image_url": "https://i.ibb.co.com/3YhMNFvB/booking-Icon.png"
  }
]

const Works = () => {

    return (
        <div className='pb-10'>
            <h2 className='font-bold text-[1.8rem] text-secondary mb-6'>How it Works</h2>
            <div className='grid md:grid-cols-4 gap-4'>
                {
                    works.map((work, index) => 
                    <div key={index} className='p-4 rounded-[0.7rem] bg-white '>
                        <img src={work.image_url} alt="" />
                        <h2 className='text-secondary font-semibold my-2 text-[1.2rem]'>{work.title}</h2>
                        <p>{work.description}</p>
                    </div> )
                }
            </div>
        </div>
    );
};

export default Works;