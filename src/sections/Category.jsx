import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Import your images (Ensure these paths are correct in your project)
import cat1 from "/assets/images/cat1.jpg";
import cat2 from "/assets/images/cat2.jpg";
import cat3 from "/assets/images/cat3.jpg";
import cat4 from "/assets/images/cat4.jpg";
import cat5 from "/assets/images/cat5.jpg";

function Category() {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 500,
      easing: "ease-in-out",
      once: true,
    });
    AOS.refresh();
  }, []);

  // Data array to avoid repeating JSX code
  const categories = [
    { id: 1, img: cat1, title: "Portable Speakers", delay: "100" },
    { id: 2, img: cat2, title: "Portable Speakers", delay: "200" },
    { id: 3, img: cat3, title: "Portable Speakers", delay: "300" },
    { id: 4, img: cat4, title: "Portable Speakers", delay: "400" },
    { id: 5, img: cat5, title: "Portable Speakers", delay: "500" },
  ];

  return (
    <section
      id="category"
      className="w-full bg-gray-100 lg:px-10 px-5 pt-[130px] pb-[80px] flex flex-col justify-center items-center gap-16"
    >
      {/* TOP SECTION: Heading and Call to Action */}
      <div
        data-aos="zoom-in"
        data-aos-delay="50"
        className="w-full flex flex-col justify-center items-center gap-5"
      >
        <h1 className="text-themepurple text-xl font-semibold">
          Favourite item
        </h1>

        <h1 className="text-black font-semibold text-[42px] leading-[50px] text-center">
          Popular category
        </h1>

        <button className="bg-themepurple hover:bg-themeyellow text-white hover:text-black px-8 py-3 rounded-lg font-semibold mt-4 transition-colors duration-300">
          VIEW ALL
        </button>
      </div>

      {/* BOTTOM SECTION: The Categories Grid - Updated to 5 columns */}
      <div className="w-full grid lg:grid-cols-5 md:grid-cols-3 grid-cols-1 justify-center items-start gap-10">
        {categories.map((item) => (
          <div
            key={item.id}
            data-aos="zoom-in"
            data-aos-delay={item.delay}
            className="flex flex-col justify-center items-center gap-6 group"
          >
            <div className="overflow-hidden rounded-full w-40 h-40 border-4 border-transparent group-hover:border-themepurple transition-all duration-300">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover cursor-pointer transform group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <h1 className="text-black text-lg font-semibold hover:text-themepurple cursor-pointer text-center">
              {item.title}
            </h1>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Category;
