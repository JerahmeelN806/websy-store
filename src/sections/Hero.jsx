import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import headset from "/assets/images/headset.jpg";
import earbuds from "/assets/images/earbuds.jpg";
import dslr from "/assets/images/dslr.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

function Hero() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true, // Added: slides will change automatically
    autoplaySpeed: 3000,
  };

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 500,
      easing: "ease-in-out",
    });
    AOS.refresh();
  }, []);

  return (
    /* FIXED ID: Changed from 'hero' to 'home' to match Header */
    <div
      id="home"
      className="w-full flex justify-center items-center lg:h-[700px] h-[600px] overflow-hidden"
    >
      <Slider className="w-full" {...settings}>
        {/* SLIDE 1: DSLR */}
        <div>
          <div
            className="w-full lg:px-20 px-5 lg:h-[700px] h-[600px] flex flex-col justify-center items-start gap-10 bg-cover bg-center relative"
            style={{ backgroundImage: `url(${dslr})` }}
          >
            {/* Overlay to make text pop more */}
            <div className="absolute inset-0 bg-black/30 z-0"></div>

            <div className="relative z-10">
              <h1
                data-aos="zoom-in"
                data-aos-delay="50"
                className="text-themeyellow border rounded-lg border-themeyellow px-6 py-2 text-xl w-fit"
              >
                Get up to 80% Off
              </h1>
              <h1
                data-aos="zoom-in"
                data-aos-delay="100"
                className="text-white lg:text-[120px] text-[60px] uppercase font-bold lg:leading-[120px] leading-[70px] mt-6"
              >
                DSLR 360 <br />
                camera
              </h1>
              <h1
                data-aos="zoom-in"
                data-aos-delay="100"
                className="text-white text-2xl mt-4"
              >
                100% trusted{" "}
                <span className="text-themeyellow font-semibold">
                  Electronic Gadgets
                </span>
              </h1>
              <button
                data-aos="zoom-in"
                data-aos-delay="200"
                className="bg-themeyellow px-8 py-4 rounded-lg text-black font-bold mt-10 hover:bg-white transition-all duration-300"
              >
                ONLINE COLLECTIONS
              </button>
            </div>
          </div>
        </div>

        {/* SLIDE 2: EARBUDS */}
        <div>
          <div
            className="w-full lg:px-20 px-5 lg:h-[700px] h-[600px] flex flex-col justify-center items-start gap-10 bg-cover bg-center relative"
            style={{ backgroundImage: `url(${earbuds})` }}
          >
            <div className="absolute inset-0 bg-black/30 z-0"></div>
            
            <div className="relative z-10">
              <h1
                data-aos="zoom-in"
                data-aos-delay="50"
                className="text-themeyellow border rounded-lg border-themeyellow px-6 py-2 text-xl w-fit"
              >
                New Arrival
              </h1>
              <h1
                data-aos="zoom-in"
                data-aos-delay="100"
                className="text-white lg:text-[120px] text-[60px] uppercase font-bold lg:leading-[120px] leading-[70px] mt-6"
              >
                WIRELESS <br />
                EARBUDS
              </h1>
              <h1
                data-aos="zoom-in"
                data-aos-delay="100"
                className="text-white text-2xl mt-4"
              >
                Premium Quality{" "}
                <span className="text-themeyellow font-semibold">
                  Crystal Sound
                </span>
              </h1>
              <button
                data-aos="zoom-in"
                data-aos-delay="200"
                className="bg-themeyellow px-8 py-4 rounded-lg text-black font-bold mt-10 hover:bg-white transition-all duration-300"
              >
                SHOP NOW
              </button>
            </div>
          </div>
        </div>

        {/* SLIDE 3: HEADSET */}
        <div>
          <div
            className="w-full lg:px-20 px-5 lg:h-[700px] h-[600px] flex flex-col justify-center items-start gap-10 bg-cover bg-center relative"
            style={{ backgroundImage: `url(${headset})` }}
          >
            <div className="absolute inset-0 bg-black/30 z-0"></div>

            <div className="relative z-10">
              <h1
                data-aos="zoom-in"
                data-aos-delay="50"
                className="text-themeyellow border rounded-lg border-themeyellow px-6 py-2 text-xl w-fit"
              >
                Limited Offer
              </h1>
              <h1
                data-aos="zoom-in"
                data-aos-delay="100"
                className="text-white lg:text-[120px] text-[60px] uppercase font-bold lg:leading-[120px] leading-[70px] mt-6"
              >
                PRO AUDIO <br />
                HEADSET
              </h1>
              <h1
                data-aos="zoom-in"
                data-aos-delay="100"
                className="text-white text-2xl mt-4"
              >
                Experience the{" "}
                <span className="text-themeyellow font-semibold">
                  True Rhythm
                </span>
              </h1>
              <button
                data-aos="zoom-in"
                data-aos-delay="200"
                className="bg-themeyellow px-8 py-4 rounded-lg text-black font-bold mt-10 hover:bg-white transition-all duration-300"
              >
                VIEW COLLECTIONS
              </button>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default Hero;
