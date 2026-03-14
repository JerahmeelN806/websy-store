<div id="top"></div>
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import Category from "./sections/Category";
import Service from "./sections/service";
import Types from "./sections/Types";
import Productsgrid from "./sections/Productsgrid";
import Banner from "./sections/Banner";
import Reviews from "./sections/Reviews";
import Insta from "./sections/Insta";
import Footer from "./sections/Footer";

export default function App() {
  return(
    <>
    <Header/>
    <Hero/>
    <Category/>
    <Types/>
    <Service/>
    <Productsgrid/>
    <Banner/>
    <Reviews/>
    <Insta/>
    <Footer/>

    </>
  )
}