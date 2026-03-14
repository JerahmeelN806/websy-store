import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

// REMOVED the import line for "deal" because it's in the public folder

function Banner() {
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
    <div className='w-full lg:px-20 px-5 py-[80px] '>
      <div 
        data-aos='zoom-in' 
        data-aos-delay='100' 
        className='w-full h-[300px] rounded-lg bg-cover bg-center flex flex-col justify-center items-center gap-3 p-4' 
        // UPDATED: Used the direct path from your public/assets folder
        style={{ backgroundImage: "url('/assets/deal-bg.jpg')" }}
      >
        <h1 className="text-themeyellow text-xl font-semibold">Everyday Shopping</h1>
        <h1 className="text-white font-bold text-[42px] leading -[50px] text-center">Deal of The Day</h1>
        
      </div>
    </div>
  );
}

export default Banner;
