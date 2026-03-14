import React, { useEffect, useState } from 'react';
import { FaStar, FaRegHeart } from 'react-icons/fa';
import { MdAddShoppingCart, MdOutlineRemoveRedEye } from 'react-icons/md';
import AOS from 'aos';
import 'aos/dist/aos.css';

// IMPORT IMAGES
import earbud from "/assets/images/earbud.jpg";
import speakers from "/assets/images/speakers.jpg";
import watch from "/assets/images/watch.jpg";
import pendrive from "/assets/images/pendrive.jpg";
import laptop from "/assets/images/laptop.jpg";
import cat3 from "/assets/images/cat3.jpg";
import mouse from "/assets/images/mouse.jpg";
import camera from "/assets/images/camera.jpg";

const Products = [
  { img: earbud, name: "Product 1", price: "40.00", category: "Earphones" },
  { img: speakers, name: "Product 2", price: "50.00", category: "Accessories" },
  { img: watch, name: "Product 3", price: "60.00", category: "Electronics" },
  { img: pendrive, name: "Product 4", price: "70.00", category: "Home" },
  { img: laptop, name: "Product 5", price: "897.28", category: "Computers" },
  { img: cat3, name: "Product 6", price: "67.88", category: "Music" },
  { img: mouse, name: "Product 7", price: "32.78", category: "Accessories" },
  { img: camera, name: "Product 8", price: "145.28", category: "Gaming" },
];

function Productsgrid() {
  const [visibleCount, setVisibleCount] = useState(4);

  useEffect(() => {
    AOS.init({ offset: 100, duration: 500, easing: "ease-in-out", once: true });
  }, []);

  const toggleVisible = () => {
    if (visibleCount >= Products.length) {
      setVisibleCount(4);
    } else {
      setVisibleCount((prev) => prev + 4);
    }
  };

  return (
    <section id='products' className='w-full lg:px-20 px-5 py-[80px] bg-gray-100 flex flex-col justify-center items-center gap-4'>
      
      <h1 data-aos="fade-up" data-aos-delay="100" className='text-themepurple text-xl font-semibold'>Browse Collections</h1>
      <h1 data-aos="fade-up" data-aos-delay="200" className='text-black font-semibold text-[42px] leading-[50px] text-center'>Trending Product</h1>
      
      <div data-aos="fade-up" data-aos-delay="300" className='w-full grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 place-items-center gap-10 mt-10'>
        {Products.slice(0, visibleCount).map((item, index) => (
          <div key={index} className="flex flex-col bg-white p-6 rounded-xl cursor-pointer relative group w-full max-w-[320px] shadow-sm hover:shadow-md transition-all duration-300">
             
             <div className='relative overflow-hidden rounded-lg w-full flex justify-center items-center h-[200px] mb-4'>
                <img src={item.img} alt={item.name} className='hover:scale-110 transition-transform duration-500 max-h-full object-contain' />
                
                <div className='flex justify-center items-center gap-3 absolute top-[-60px] group-hover:top-[10px] left-0 right-0 transition-all duration-300'>
                  <button className='bg-blue-600 p-2 rounded-full text-white hover:bg-yellow-400 hover:text-black shadow-md transition-colors'><MdOutlineRemoveRedEye size={20}/></button>
                  <button className='bg-blue-600 p-2 rounded-full text-white hover:bg-yellow-400 hover:text-black shadow-md transition-colors'><FaRegHeart size={18}/></button>
                  <button className='bg-blue-600 p-2 rounded-full text-white hover:bg-yellow-400 hover:text-black shadow-md transition-colors'><MdAddShoppingCart size={20}/></button>
                </div>
             </div>

             <div className='flex flex-col items-center text-center gap-1 mb-4'>
               <p className='text-gray-400 text-sm'>{item.category}</p>
               <h1 className='text-lg font-semibold text-black'>{item.name}</h1>
               <h1 className='text-blue-700 font-bold text-xl'>${item.price}</h1>
             </div>

             <div className='w-full flex justify-between items-center border-t pt-4'>
               <div className='flex text-purple-600 gap-1 text-sm'>
                 <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
               </div>
               <div className='bg-green-500 text-white text-[10px] font-bold px-3 py-1 rounded uppercase'>
                 Sale 14%
               </div>
             </div>
          </div>
        ))}
      </div>

      <button 
        onClick={toggleVisible}
        data-aos='zoom-in' 
        className='bg-themepurple hover:bg-themeyellow text-white hover:text-black font-semibold px-8 py-3 rounded-lg mt-8 transition-colors'
      >
        {visibleCount >= Products.length ? "Show Less" : "View More"}
      </button>
    </section>
  );
}

export default Productsgrid;