import React, { useEffect } from 'react';
import insta1 from "/assets/images/insta-1.jpg"
import insta2 from "/assets/images/insta-2.jpg"
import insta3 from "/assets/images/insta-3.jpg"
import insta4 from "/assets/images/insta-4.jpg"
import insta5 from "/assets/images/insta-5.jpg"
import insta6 from "/assets/images/insta-6.jpg"

import AOS from "aos";
import "aos/dist/aos.css";

function Insta() {
    useEffect(() => {
      // Initialize AOS
      AOS.init({
        offset: 100,
        duration: 800,
        easing: "ease-in-out",
        once: true, // Try setting to true first to ensure they appear and stay
      });
      
      // Critical: Refresh AOS to catch the elements in the DOM
      AOS.refresh();
    }, []);

  return (
    <section className='w-full lg:px-20 px-5 py-[80px] bg-white flex flex-col justify-center items-center gap-2 text-center overflow-hidden'>
      
      <h1 data-aos='fade-up' data-aos-delay='100' className='text-themepurple text-xl font-semibold capitalize'>
        Our Instagram Shop
      </h1>
      
      <h1 data-aos='fade-up' data-aos-delay='200' className='text-black font-semibold text-[42px] leading-[50px] capitalize'>
        Follow On Instagram
      </h1>

      <div className='w-full grid lg:grid-cols-6 md:grid-cols-3 grid-cols-2 justify-center gap-6 mt-8'>
        <img src={insta1} data-aos='zoom-in' data-aos-delay='300' alt="insta" className='rounded-lg w-full h-auto hover:scale-105 transition-transform duration-300 cursor-pointer'/>
        <img src={insta2} data-aos='zoom-in' data-aos-delay='400' alt="insta" className='rounded-lg w-full h-auto hover:scale-105 transition-transform duration-300 cursor-pointer'/>
        <img src={insta3} data-aos='zoom-in' data-aos-delay='500' alt="insta" className='rounded-lg w-full h-auto hover:scale-105 transition-transform duration-300 cursor-pointer'/>
        <img src={insta4} data-aos='zoom-in' data-aos-delay='600' alt="insta" className='rounded-lg w-full h-auto hover:scale-105 transition-transform duration-300 cursor-pointer'/>
        <img src={insta5} data-aos='zoom-in' data-aos-delay='700' alt="insta" className='rounded-lg w-full h-auto hover:scale-105 transition-transform duration-300 cursor-pointer'/>
        <img src={insta6} data-aos='zoom-in' data-aos-delay='800' alt="insta" className='rounded-lg w-full h-auto hover:scale-105 transition-transform duration-300 cursor-pointer'/>
      </div>

    </section>
  )
}

export default Insta;
