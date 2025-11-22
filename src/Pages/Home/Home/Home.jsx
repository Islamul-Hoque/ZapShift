import React from 'react';
import Banner from '../Banner/Banner';
import Brands from '../Brands/Brands';
import Works from '../Works/Works';
import Services from '../Services/Services';
import LiveWorks from '../LiveWorks/LiveWorks';
import axios from 'axios';
import Reviews from '../Reviews/Reviews';

const reviewsPromise = axios('/reviews.json')

const Home = () => {
    return (
        <div>
            <section className='px-6 pt-6 md:pt-10 md:px-10'><Banner/></section>
            <section className='px-6 md:px-10'><Works/></section>
            <section className='px-6 md:px-10 pb-10'> <Services/> </section>
            <section className='p-6 md:p-10'><Brands/></section>
            <section className='p-6 md:p-10'><LiveWorks/></section>
            <section> <Reviews reviewsPromise={reviewsPromise}/> </section>
        </div>
    );
};

export default Home;