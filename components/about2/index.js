import React from 'react';
import Link from 'next/link';
import VideoModal from '../../components/ModalVideo';
import abimg from '/public/images/about.jpg';
import abimg2 from '/public/images/about/1.png';
import abimg3 from '/public/images/about/2.png';
import abimg4 from '/public/images/shape/shape2.png';
import Image from 'next/image';
import { useRouter } from 'next/router';

const About2 = (props) => {
    const router = useRouter();

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    };
    const VoirPlus = () => {
        router.push('/about')
    }

    return (
        <div className="about-area section-padding">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-7 grid col-md-12 col-12">
                        <div className="about-text">
                            <div className="section-title">
                                <div className="thumb-text">
                                    <span>QUI SOMMES NOUS ?</span>
                                </div>
                            </div>
                            <p className="text-justify">
                                La plateforme JAPNACI, initiée par le Mouvement Actions Citoyennes (M.A.C), s'érige comme un
                                outil novateur visant à simplifier et optimiser le processus de collecte de dons. Son objectif
                                transcende les frontières géographiques, cherchant à mobiliser l'ensemble de nos concitoyens,
                                où qu'ils se trouvent. En effet, grâce à cette plateforme, les dons et l'engagement de chacun sont
                                canalisés pour mener une lutte efficace et visible contre la pauvreté et les inégalités.
                                JAPNACI offre une opportunité concrète d'apporter un soutien financier et de renforcer les
                                capacités des citoyens, ouvrant ainsi la voie à un développement économique et personnel
                                significatif. Cette initiative va au-delà de la simple collecte de fonds en mettant en place
                                des mécanismes d'accompagnement visant à responsabiliser et à autonomiser les bénéficiaires. À
                                travers cette plateforme dédiée aux dons, le Mouvement Actions Citoyennes aspire à construire
                                une communauté engagée, où la solidarité devient un levier puissant pour catalyser des
                                changements positifs. JAPNACI se positionne ainsi comme un catalyseur de progrès, contribuant
                                à forger un avenir où chaque citoyen peut aspirer à un mieux-être économique et social.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="ab-shape">
                <Image src={abimg4} alt="" />
            </div>
        </div>
    );
};

export default About2;
