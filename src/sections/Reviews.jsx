import React, { useEffect, useState, useMemo } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { FaStar } from "react-icons/fa"; 
import AOS from "aos";
import "aos/dist/aos.css";

const reviewdata = [
  { name: "Alice Johnson", review: "The service was amazing!", post: "CEO", img: "/assets/test-1.jpg"},
  { name: "John Doe", review: "Fast delivery and great quality.", post: "Designer", img: "/assets/test-2.jpg" },
  { name: "Sarah Smith", review: "I love the user interface!", post: "Developer", img: "/assets/test-3.jpg" },
  { name: "Michael Brown", review: "Highly recommended to everyone.", post: "Manager", img: "/assets/test-4.jpg" },
  { name: "Emma Wilson", review: "Best experience I've had so far.", post: "Artist", img: "/assets/test-5.jpg" },
];

function Reviews() {
  // 1. MANUALLY track the window width
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

  useEffect(() => {
    AOS.init({ offset: 100, duration: 500, easing: "ease-in-out", once: true });
    
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    
    // 2. FORCE a check 100ms after refresh to catch the "real" mobile width
    const timer = setTimeout(() => {
        setWindowWidth(window.innerWidth);
    }, 150);

    return () => {
        window.removeEventListener('resize', handleResize);
        clearTimeout(timer);
    };
  }, []);

  // 3. MANUALLY calculate slidesToShow instead of using the "responsive" array
  const slidesToDisplay = useMemo(() => {
    if (windowWidth < 768) return 1;
    if (windowWidth < 1024) return 2;
    return 3;
  }, [windowWidth]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToDisplay, // Use our manual value here
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    // Disable the internal responsive engine to prevent it from overriding us
    responsive: [] 
  };

  return (
    <div id='testimonials' className='w-full overflow-hidden lg:px-20 px-5 py-[80px] bg-gray-100 flex flex-col justify-center items-center gap-4'>
      <span data-aos='zoom-in' className='text-themepurple text-xl font-semibold'>1300+ Customer reviews</span>
      <h2 data-aos='zoom-in' className='text-black font-semibold text-[32px] md:text-[42px] text-center capitalize'>Our Customers Love Us</h2>
      
      <div className='w-full mt-10'>
        {/* We use slidesToDisplay as a key to force a hard-refresh when width changes */}
        <Slider key={slidesToDisplay} className='w-full' {...settings}>
          {reviewdata.map((item, index) => (
            <div key={index} className="px-3 pb-10 outline-none"> 
              <div className='bg-white p-8 rounded-xl flex flex-col gap-4 shadow-md h-full min-h-[250px]'>
                <div className='flex justify-start items-center gap-4'>
                  <img src={item.img} alt={item.name} className='w-16 h-16 rounded-full border-2 border-themepurple object-cover' />
                  <div>
                    <h3 className='text-black font-bold text-lg leading-tight'>{item.name}</h3>
                    <p className='text-gray-500 text-sm'>{item.post}</p>
                  </div>
                </div>
                <p className='text-gray-600 italic text-sm'>"{item.review}"</p>
                <div className='flex text-yellow-500 text-xs mt-auto'>
                  <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Reviews;
