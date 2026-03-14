import React, { useEffect, useState } from "react";
import { FaSearch, FaHeart, FaShoppingCart, FaMapMarkerAlt, FaPhoneVolume, FaBars } from 'react-icons/fa'; 
import { IoPerson } from 'react-icons/io5';
import { FaXmark } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';
import { Link } from 'react-scroll';
import AOS from "aos";
import "aos/dist/aos.css";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 500,
      easing: "ease-in-out",
    });
    AOS.refresh();
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navitems = [
    { link: 'Home', path: 'home' },
    { link: 'About', path: 'about' },
    { link: 'Products', path: 'products' },
    { link: 'Testimonials', path: 'testimonials' },
    { link: 'Contacts', path: 'contacts' },
  ];

  return (
    <header className="w-full sticky top-0 z-[100] shadow-sm">
      {/* TOP INFO BAR (Desktop Only) */}
      <div className="w-full px-16 py-2 bg-themeyellow lg:flex hidden justify-between items-center gap-4">
        <div className="flex justify-center items-center gap-2">
          <FaPhoneVolume className="size-[18px]" /> 
          <span className="text-sm font-semibold text-black">+234 9015337544</span>
        </div>
        <div className="flex justify-center items-center gap-2">
          <FaMapMarkerAlt className="size-[18px]" /> 
          <span className="text-sm font-semibold text-black">Lagos, Nigeria</span>
        </div>
        <div className="flex justify-center items-center gap-2">
          <MdEmail className="size-[18px]" /> 
          <span className="text-sm font-semibold text-black">Jerahmeel657@gmail.com</span>
        </div> 
      </div>

      {/* MAIN NAVIGATION */}
      <nav className="w-full bg-white flex justify-between items-center lg:px-16 px-4 py-4 relative">
        
        {/* LOGO */}
        <h1 className="text-themepurple font-bold lg:text-[30px] text-2xl underline italic cursor-pointer whitespace-nowrap">
          Electra Shop
        </h1>

        {/* CENTERED NAV LINKS (Desktop Only) */}
        <ul className="lg:flex justify-center items-center gap-8 hidden">
          {navitems.map((item) => (
            <li key={item.path}>
              <Link 
                to={item.path} 
                spy={true} 
                smooth={true} 
                offset={-70} 
                duration={500} 
                className="text-black uppercase text-[15px] font-bold cursor-pointer hover:text-themepurple transition-all duration-300"
              >
                {item.link}
              </Link>
            </li>
          ))}
        </ul>

        {/* RIGHT SIDE SECTION */}
        <div className="flex justify-center items-center gap-5">
          {/* ICONS - Hidden on Mobile */}
          <div className="lg:flex hidden justify-center items-center gap-5">
            <FaSearch className="size-5 text-black cursor-pointer hover:text-themepurple" />
            <IoPerson className="size-5 text-black cursor-pointer hover:text-themepurple" />
            <FaHeart className="size-5 text-black cursor-pointer hover:text-themepurple" />
            <div className="relative cursor-pointer group">
              <FaShoppingCart className="size-5 text-black group-hover:text-themepurple" />
              <div className="bg-themepurple text-white text-[10px] font-bold rounded-full size-4 flex justify-center items-center absolute -top-2 -right-2">
                2
              </div>
            </div>
          </div>

          {/* MOBILE MENU TOGGLE */}
          <div className="lg:hidden flex items-center" onClick={toggleMenu}>
            {isMenuOpen ? (
              <FaXmark className="size-8 text-themepurple cursor-pointer" />
            ) : (
              <FaBars className="size-8 text-themepurple cursor-pointer" />
            )}
          </div>
        </div>

        {/* MOBILE MENU DROPDOWN - Absolute positioned to prevent shifting */}
        <div className={`${isMenuOpen ? 'flex' : 'hidden'} w-full bg-themepurple p-6 absolute top-full left-0 flex-col items-center gap-6 shadow-xl lg:hidden z-[101]`}>
           {navitems.map((item) => (
             <Link 
               key={item.path} 
               to={item.path} 
               spy={true} 
               smooth={true} 
               offset={-70} 
               duration={500} 
               onClick={closeMenu} 
               className="text-white uppercase font-bold text-lg cursor-pointer hover:opacity-80"
             >
               {item.link}
             </Link>
           ))}
        </div>
      </nav>
    </header>
  );
}

export default Header;
