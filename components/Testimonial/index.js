import React, { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import test1 from '/public/images/testimonials/img-1.png'
import test2 from '/public/images/testimonials/img-2.png'
import test3 from '/public/images/testimonials/img-3.png'
import test4 from '/public/images/ts.png'
import Image from 'next/image';



const Testimonial = () => {

    const [nav1, setNav1] = useState();
    const [nav2, setNav2] = useState();

    return (
        <section className="testimonials-section section-padding">
            <div className="container">
                <div className="row">
                    <div className="col col-xs-12">
                        <div className="testimonials-slider">
                            <div className="testimonial-thumb-active">
                                <Slider
                                    asNavFor={nav2} ref={(slider2) => setNav2(slider2)}
                                    fade={true}
                                >
                                    <div className="test-img">
                                        <Image src={test1} alt="" />
                                    </div>
                                    <div className="test-img">
                                        <Image src={test2} alt="" />
                                    </div>
                                </Slider>
                            </div>
                            <div className="testimonial-content-active text-center">
                                <Slider asNavFor={nav1}
                                    ref={(slider2) => setNav2(slider2)}
                                    slidesToShow={1}
                                    fade={true}
                                    swipeToSlide={true}
                                    focusOnSelect={true}
                                    arrows={false}
                                    >
                                    
                                    <div className="grid">
                                        <ul>
                                            <li><i className="fa fa-star"></i></li>
                                            <li><i className="fa fa-star"></i></li>
                                            <li><i className="fa fa-star"></i></li>
                                            <li><span><i className="fa fa-star"></i></span></li>
                                            <li><span><i className="fa fa-star"></i></span></li>
                                        </ul>
                                        <p>“ There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some
                                            form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a
                                            passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden
                                            in the middle of text all the loss.</p>
                                        <div className="info">
                                            <h5>Tawana Blackman</h5>
                                            <p>Volunteer</p>
                                        </div>
                                    </div>
                                    <div className="grid">
                                        <ul>
                                            <li><i className="fa fa-star"></i></li>
                                            <li><i className="fa fa-star"></i></li>
                                            <li><i className="fa fa-star"></i></li>
                                            <li><span><i className="fa fa-star"></i></span></li>
                                            <li><span><i className="fa fa-star"></i></span></li>
                                        </ul>
                                        <p>“Dicture that he had recently cut out of an illustrated magazine and housed in a nice, gilded frame It showed a lady fitted out with a fur hat and fur boa who sat upright, raising a heavy fur muff that covered”</p>
                                        <div className="info">
                                            <h5>Michel Jhone</h5>
                                            <p>Volunteer</p>
                                        </div>
                                    </div>
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="testi-shape">
                <Image src={test3} alt="" />
            </div>
            <div className="testi-shape2">
                <Image src={test4} alt="" />
            </div>
        </section>
    )
}

export default Testimonial;