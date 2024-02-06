import React from 'react';
import ContactForm from '../ContactFrom'
import { toast } from 'react-toastify';
import ContactFormDN from '../ContactFormDN';
import NaturePeopleIcon from '@mui/icons-material/NaturePeople';

const DNContactpage = () => {

    return(
        <section className="contact-pg-contact-section section-padding">
            <div className="container">
                <div className="row">
                    <div className="col col-lg-6 col-12">
                        <div className="section-title-s3 section-title-s5">
                            <h2>Nos contacts</h2>
                        </div>
                        <div className="contact-details">
                            <ul>
                                <li>
                                    <div className="icon">
                                        <i className="ti-location-pin"></i>
                                    </div>
                                    <h5>Notre emplacement</h5>
                                    <p>Cité Cheikh Ahmadou Bamba villa num.19, Biscuiterie</p>
                                </li>
                                <li>
                                    <div className="icon">
                                        <i className="ti-mobile"></i>
                                    </div>
                                    <h5>Telephone</h5>
                                    <p>+221 77 700 48 85</p>
                                </li>
                                <li>
                                    <div className="icon">
                                        <i className="ti-email"></i>
                                    </div>
                                    <h5>Email</h5>
                                    <p>hello@japnaci.com</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col col-lg-6 col-12">
                        <div className="contact-form-area">
                            <div className="section-title-s3 section-title-s5">
                            <h2 style={{ color: "#1d5d1d", fontFamily: 'Buddy Champion', fontSize: "40px", display: 'flex', alignItems: 'center' }}>
                    Formulaire de Don en Nature
                    <NaturePeopleIcon style={{ marginLeft: '10px' }} />
                </h2>

                            </div>
                            <div className="contact-form">
                                <ContactFormDN/>
                            </div>
                        </div>
                    </div>
                </div>
            
            </div>
        </section>
     )
        
}

export default DNContactpage;
