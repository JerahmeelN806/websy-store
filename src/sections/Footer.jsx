import React, { useEffect, useState } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import { FaArrowUp, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaCheckCircle } from 'react-icons/fa';
import AOS from "aos";
import "aos/dist/aos.css";

// Brand Logos
import client1 from "/assets/client1.png";
import client2 from "/assets/client2.png";
import client3 from "/assets/client3.png";
import client4 from "/assets/client4.png";
import client5 from "/assets/client5.png";
import client6 from "/assets/client6.png";

// Store Badges
import googlePlay from "/assets/google.jpg";
import appStore from "/assets/apple.jpg";

// Payment Icons
import pay1 from "/assets/pay-1.jpg";
import pay2 from "/assets/pay-2.jpg";
import pay3 from "/assets/pay-3.jpg";
import pay4 from "/assets/pay-4.jpg";

function Footer() {
  const [isSubscribed, setIsSubscribed] = useState(false);

  useEffect(() => {
    AOS.init({ offset: 50, duration: 600, easing: "ease-in-out", once: true });
  }, []);

  const currentYear = new Date().getFullYear();

  const handleSubscribe = (e) => {
    e.preventDefault();
    setIsSubscribed(true);
    setTimeout(() => setIsSubscribed(false), 5000);
  };

  return (
    <footer id='contacts' className="w-full font-sans bg-[#f3f4f6] text-gray-600 relative overflow-hidden">
      
      {/* 1. Brand Bar */}
      <div className='w-full bg-[#5a3db5] py-8 px-10'>
        <div className='max-w-[1200px] mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center'>
          {[client1, client2, client3, client4, client5, client6].map((client, index) => (
            <img key={index} src={client} alt="Brand" className='h-6 brightness-0 invert opacity-80' />
          ))}
        </div>
      </div>

      {/* 2. Footer Content */}
      <div className='w-full py-20 px-6 md:px-10'>
        <div className='max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 border-b border-gray-300 pb-16'>
          
          <div className="flex flex-col gap-6" data-aos="fade-up">
            <h1 className='text-3xl font-bold text-[#5a3db5] italic'>Electra Shop</h1>
            <p className='text-sm leading-relaxed text-gray-500'>
              Discover the best electronics at Electra Shop. Quality products and fast delivery.
            </p>
            <div className='flex flex-col gap-4'>
              <h3 className='font-bold text-black'>Download Our App</h3>
              <div className='flex gap-3'>
                <img src={googlePlay} alt="Play Store" className='w-32 rounded-lg cursor-pointer' />
                <img src={appStore} alt="App Store" className='w-32 rounded-lg cursor-pointer' />
              </div>
            </div>
          </div>

          <div className='flex flex-col gap-4' data-aos="fade-up">
            <h3 className='font-bold text-black border-b-2 border-[#5a3db5] w-fit pr-6 pb-1'>Useful Links</h3>
            <ul className='flex flex-col gap-3 text-sm'>
              {['Home', 'About', 'Services', 'Blogs', 'Contact'].map((item) => (
                <li key={item} className='hover:text-[#5a3db5] cursor-pointer'>▶ {item}</li>
              ))}
            </ul>
          </div>

          <div className='flex flex-col gap-4' data-aos="fade-up">
            <h3 className='font-bold text-black border-b-2 border-[#5a3db5] w-fit pr-6 pb-1'>Information</h3>
            <ul className='flex flex-col gap-3 text-sm'>
              {['Return Policy', 'Privacy Policy', 'Refund Policy', 'Terms'].map((item) => (
                <li key={item} className='hover:text-[#5a3db5] cursor-pointer'>▶ {item}</li>
              ))}
            </ul>
          </div>

          <div className='flex flex-col gap-4' data-aos="fade-up">
            <h3 className='font-bold text-black border-b-2 border-[#5a3db5] w-fit pr-6 pb-1'>Contact Info</h3>
            <div className='text-sm flex flex-col gap-6 text-gray-500'>
              <div className='flex items-center gap-4'>
                <FaPhoneAlt className="text-[#5a3db5]" /> <p>+234 9015337544</p>
              </div>
              <div className='flex items-center gap-4'>
                <FaEnvelope className="text-[#5a3db5]" /> <p>info@electrashop.com</p>
              </div>
              <div className='flex items-start gap-4'>
                <FaMapMarkerAlt className="text-[#5a3db5] mt-1" /> <p>Lagos, Nigeria</p>
              </div>
            </div>
          </div>
        </div>

        {/* 3. Bottom Section - STACKED FOR MOBILE */}
        <div className='max-w-[1200px] mx-auto pt-12 flex flex-col items-center gap-8'>
          
          <div className='flex gap-4 items-center justify-center'>
            {[pay1, pay2, pay3, pay4].map((pay, i) => (
              <img key={i} src={pay} alt="Payment" className='w-12 h-8 object-contain bg-white p-1 rounded shadow-sm border border-gray-100' />
            ))}
          </div>

          <div className='flex flex-col items-center gap-5 w-full max-w-sm px-4'>
            {isSubscribed ? (
              <div className="flex flex-col items-center gap-2 py-6 text-center">
                <FaCheckCircle className="text-green-500 text-5xl" />
                <h3 className='text-xl font-bold text-black'>Successfully Sent!</h3>
              </div>
            ) : (
              <>
                <h3 className='text-xl font-bold text-black text-center'>Subscribe Newsletter</h3>
                {/* CHANGED: Added flex-col and w-full to make the stack clean */}
                <form onSubmit={handleSubscribe} className='w-full flex flex-col bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200'>
                  <input 
                    type="email" 
                    required
                    placeholder="Enter Your Email" 
                    className='w-full px-5 py-5 focus:outline-none text-black text-center placeholder:text-gray-400'
                  />
                  <button type="submit" className='w-full bg-[#5a3db5] text-white py-4 font-bold hover:bg-black uppercase text-sm tracking-widest'>
                    SUBMIT
                  </button>
                </form>
              </>
            )}
          </div>

          <div className='text-xs text-gray-500 text-center pb-10'>
            <p className='font-bold'>© {currentYear} Powered by Debug</p>
            <p className="font-extrabold uppercase tracking-widest text-[#5a3db5] mt-1">ENTITY</p>
          </div>
        </div>
      </div>

      <div className="fixed bottom-8 right-8 z-50">
        <div 
          onClick={() => scroll.scrollToTop()}
          className='bg-[#5a3db5] w-12 h-12 rounded-full cursor-pointer hover:bg-black transition-all shadow-2xl flex items-center justify-center text-white'
        >
          <FaArrowUp />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
