import React, { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";

// Check if this path is actually correct in your sidebar!
import banner1 from "/assets/images/banner1.jpg";
import banner2 from "/assets/images/banner2.jpg";
import banner3 from "/assets/images/banner3.jpg";



function Types() {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 500,
      easing: "ease-in-out",
      once: true,
    });
    AOS.refresh();
  }, []);

  return (
    <div className='w-full lg:px-20 px-5 py-[80px] grid lg:grid-cols-3 grid-cols-1 justify-center items-start gap-10'>
      <div 
        data-aos="zoom-in" 
        data-aos-delay="100" 
        className='flex flex-col justify-center items-end gap-6 bg-cover bg-center p-10 rounded-lg' 
        style={{ backgroundImage: `url(${banner1})` }}  >

          <h1 className='text-themeyellow border rounded-lg border-themeyellow px-6 py-2 text-lg'>60% off</h1>
      
      <h1 className='text-4xl text-end text-white font-semibold'>Wireless <br />Devices</h1>
      <button className='bg-themeyellow px-6 py-3 rounded-lg text-black font-semibold'>Shop Now</button>
    
        {/* Content goes here */}
      </div>

       <div 
        data-aos="zoom-in" 
        data-aos-delay="100" 
        className='flex flex-col justify-center items-end gap-6 bg-cover bg-center p-10 rounded-lg' 
        style={{ backgroundImage: `url(${banner2})` }}  >

          <h1 className='text-themeyellow border rounded-lg border-themeyellow px-6 py-2 text-lg'>60% off</h1>
      
      <h1 className='text-4xl text-end text-white font-semibold'>Wireless <br />Devices</h1>
      <button className='bg-themeyellow px-6 py-3 rounded-lg text-black font-semibold'>Shop Now</button>
    
        {/* Content goes here */}
      </div>

       <div 
        data-aos="zoom-in" 
        data-aos-delay="100" 
        className='flex flex-col justify-center items-end gap-6 bg-cover bg-center p-10 rounded-lg' 
        style={{ backgroundImage: `url(${banner3})` }}  >

          <h1 className='text-themeyellow border rounded-lg border-themeyellow px-6 py-2 text-lg'>60% off</h1>
      
      <h1 className='text-4xl text-end text-white font-semibold'>Wireless <br />Devices</h1>
      <button className='bg-themeyellow px-6 py-3 rounded-lg text-black font-semibold cursor-pointer'>Shop Now</button>
    
        {/* Content goes here */}
      </div>
    </div>
  );
}

export default Types;
