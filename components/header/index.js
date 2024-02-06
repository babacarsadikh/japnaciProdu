import React, { useState } from 'react'; // Importez useState depuis React
import Logo from '/public/images/logo/logo.jpeg'
import Link from 'next/link'
import HeaderTopbar from '../HeaderTopbar'
import MobileMenu from '../../components/MobileMenu'
import min1 from '/public/images/shop/mini/img-1.jpg'
import min2 from '/public/images/shop/mini/img-2.jpg'
import Image from 'next/image'

const Header = (props) => {
    const SubmitHandler = (e) => {
        e.preventDefault();
    };

    // const [userData, setUserData] = useState(JSON.parse(localStorage.getItem('userData')) || null);
    const [userData, setUserData] = useState(() => {
        if (typeof window !== 'undefined' && localStorage.getItem('userData')) {
            return JSON.parse(localStorage.getItem('userData'));
        }
        return null;
    });

    return (
        <div className="middle-header">
            <HeaderTopbar tpClass={props.tpClass} userData={userData} />
            <div className="header-style-3">
                <div className="container">
                    <div className="header-content">
                        <div className="row">
                            <div className="col-lg-3 col-md-4 col-sm-4 col-4">
                                <div className="logo">
                                    <Link className="logobi" href="/" title="" >
                                         {/* <p style={{ color: "#1d5d1d", fontFamily: 'Buddy Champion', fontSize: "30px" }}>JAPNACI</p>  */}
                                             <Image
                                            src={Logo}  // Mettez le chemin correct vers votre image logo
                                            alt="Votre Logo"
                                            width={110}  // Ajustez la largeur de l'image selon vos besoins
                                            height={55}  // Ajustez la hauteur de l'image selon vos besoins
                                            />
                                     </Link>
                                </div>
                            </div>
                            <div className="col-lg-8 d-lg-block d-none">
                                <nav>
                                    <ul>
                                        <li><Link className="active" href="/home" title="">Accueil</Link></li>
                                        <li><Link href="/case" title="">Actions sociales </Link></li>
                                        <li><Link href="/contact" title="">Contact</Link></li>
                                    </ul>
                                </nav>
                            </div>
                            <div className="col-lg-1 col-md-6 col-sm-6 col-6">
                                <div className="contact">
                                    <div className="cart-search-contact">
                                        <div className="header-search-form-wrapper">
                                            <button className="search-toggle-btn"><i className="fi flaticon-magnifying-glass"></i></button>
                                            <div className="header-search-form">
                                                <form onSubmit={SubmitHandler}>
                                                    <div>
                                                        <input type="text" className="form-control" placeholder="Recherche ici..." />
                                                        <button type="submit"><i className="ti-search"></i></button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-2 col-sm-2 col-2">
                                <MobileMenu />
                            </div>
                        </div>
                        <div className="clearfix"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
