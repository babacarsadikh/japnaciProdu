import React from 'react'
import Link from 'next/link'
import abimg from '/public/images/about/about.jpg'
import abimg2 from '/public/images/about/1.png'
import abimg3 from '/public/images/about/2.png'
import abimg4 from '/public/images/shape/shape2.png'
import Image from 'next/image'

const About = (props) => {
    const ClickHandler = () =>{
        window.scrollTo(10, 0);
     }
    return(
        <div className="about-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-5 col-md-12  grid col-12 mt-4">
                        <div className="">
                            <div className="about-img">
                                <Image src={abimg} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 offset-lg-1 grid  col-md-12 col-12">
                        <div className="about-text">
                            <div className="section-title">
                            <h1 style={{ color: '#1d5d1d', display: 'inline-block', marginLeft: '0.5em' }}>A PROPOS DE JAPNACI</h1>
                                {/* <h2>Khairah is <span>Nonprofit</span> Organization <span>For Help</span> Children.</h2> */}
                            </div>
                            <p>JAPNACI est une plateforme conçue par le Mouvement Actions Citoyennes  (M.A.C)  pour simplifier et optimiser le processus de collecte de dons à travers des actions de solidarité qui vise l'ensemble de nos concitoyens ou qu'ils puissent se trouver
A travers cette plate-forme il sera possible grâce aux dons et a l'implication de tous de lutter efficacement et de manière visible contre la pauvreté et les inégalités mais également permettre a nos concitoyens a travers des mécanismes d'accompagnement  financier mais aussi de renforcement de capacites d'entrevoir sérieusement un développement économique et personnel.
A travers cette plate-forme dediée aux dons <span> <a href="/about"  style={{ color: '#1d5d1d'}} >voir plus ...</a></span></p>
                        
                        
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="ab-shape">
                 <Image src={abimg4} alt="" />
            </div> */}
        </div>
    )
}

export default About;