import React, { useEffect } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaQuoteLeft, FaStar } from "react-icons/fa"; 
import AOS from "aos";
import "aos/dist/aos.css";

// 1. Updated paths to match your sidebar: /public/assets/test-1.jpg
const reviewdata = [
  { name: "Alice Johnson", review: "The service was amazing!", post: "CEO", img: "/assets/test-1.jpg"},
  { name: "John Doe", review: "Fast delivery and great quality.", post: "Designer", img: "/assets/test-2.jpg" },
  { name: "Sarah Smith", review: "I love the user interface!", post: "Developer", img: "/assets/test-3.jpg" },
  { name: "Michael Brown", review: "Highly recommended to everyone.", post: "Manager", img: "/assets/test-4.jpg" },
  { name: "Emma Wilson", review: "Best experience I've had so far.", post: "Artist", img: "/assets/test-5.jpg" },
];

function Reviews() {
  useEffect(() => {
    AOS.init({ offset: 100, duration: 500, easing: "ease-in-out", once: true });
    AOS.refresh();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, 
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 600, settings: { slidesToShow: 1 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } }
    ]
  };

  return (
    <div id='testimonials' className='w-full lg:px-20 px-5 py-[80px] bg-gray-100 flex flex-col justify-center items-center gap-4 '>
      <h1 data-aos='zoom-in' data-aos-delay='100' className='text-themepurple text-xl font-semibold capitalize'>1300+ Customer reviews</h1>
      <h1 data-aos='zoom-in' data-aos-delay='200' className='text-black font-semibold text-[42px] leading-[50px] text-center capitalize'>Our Customers Love Us</h1>
      
      <div data-aos='zoom-in' data-aos-delay='300' className='w-full mt-10'>
        <Slider className='w-full' {...settings}>
          {
            reviewdata.map((item, index) => (
              <div key={index} className="px-3 pb-5"> 
                <div className='bg-white p-8 rounded-xl flex flex-col gap-4 shadow-md h-full'>
                  <div className='flex justify-start items-center gap-4'>
                    {/* The object-cover class ensures your local images don't look stretched */}
                    <img src={item.img} alt={item.name} className='w-16 h-16 rounded-full border-2 border-themepurple object-cover' />
                    <div>
                      <h2 className='text-black font-bold text-lg'>{item.name}</h2>
                      <p className='text-gray-500 text-sm'>{item.post}</p>
                    </div>
                  </div>
                  <p className='text-gray-600 italic text-sm'>"{item.review}"</p>
                  <div className='flex text-yellow-500 text-xs'>
                    <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                  </div>
                </div>
              </div>
            ))
          }
        </Slider>
      </div>
    </div>
  );
}

export default Reviews;
