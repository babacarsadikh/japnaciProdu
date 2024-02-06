import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import partner1 from '/public/images/partners/cashli.png'
import partner2 from '/public/images/partners/logo-maese-min.png'
import partner3 from '/public/images/partners/df.png'
import partner4 from '/public/images/partners/visa.svg.webp'
import partner5 from '/public/images/partners/5.png'
import Image from "next/image";


const Partner = () => {

  var settings = {
    dots: false,
    arrows: false,
    speed: 1200,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    fade: false,

    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <section className="partners-section section-padding">
      <div className="container">
        <div className="row">
          <div className="col col-xs-12">
            <div className="partner-grids partners-slider">
              <Slider {...settings}>
                <div className="grid">
                  <Image src={partner1} alt="" />
                </div>
                <div className="grid">
                  <Image src={partner2} alt="" />
                </div>
                <div className="grid">
                  <Image src={partner3} alt="" />
                </div>
                <div className="grid">
                  <Image width={122} src={partner4} alt="" />
                </div>
                <div className="grid">
                  <Image src={partner1} alt="" />
                </div>
               
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Partner;