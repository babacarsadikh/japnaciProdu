import React from "react";
import Slider from "react-slick";
import Link from 'next/link'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import hero4 from '/public/images/shape/shape.png'
import Image from "next/image";


const Hero = () => {

    var settings = {
        dots: true,
        arrows: true,
        speed: 1200,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        fade: true
    };

    return (
        <section className="hero-slider hero-style-1">
            <Slider {...settings}>
                <div className="slide">
                    <div className="slide-inner" style={{ backgroundImage: `url(${'/images/slider/back2.jpg'})` }}>
                        <div className="container" style={{marginTop:'15%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
                           
                         
                            <div className="slide-btns">
                                <Link href="/donation" className="theme-btn">Faire un don maintenant<i className="fa fa-angle-double-right" aria-hidden="true"></i></Link>
                            </div>
                        </div>
                       
                    </div>
                </div>
               
               
            </Slider>
        </section>
    )
}

export default Hero;