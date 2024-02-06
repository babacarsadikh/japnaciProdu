import React, { useState, useEffect } from 'react';
import abimg from './money.png';
import pmt1 from '/public/images/about/money.jpg';
import pmt2 from '/public/images/about/blood.jpg';
import pmt3 from '/public/images/about/nature.webp';
import { FaBox } from 'react-icons/fa';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { PhoneInput } from 'react-international-phone';
import "react-international-phone/style.css";
import Pays from '../../api/pays';
import Causes from '../../api/cause';
import { useRouter } from 'next/router';
import DonCard from '../donCard';

const Donation = (props) => {
    const [phone, setPhone] = useState("");
    const [mail, setMail] = useState('');
    const [montant, setMontant] = useState(1000);
    const [montantSaisi, setMontantSaisi] = useState('');
    const [isMontant1000Selected, setIsMontant1000Selected] = useState(true);
    const [isAutreMontantSelected, setIsAutreMontantSelected] = useState(false);
    const [isMontantInputVisible, setIsMontantInputVisible] = useState(true);
    const [selectedCountry, setSelectedCountry] = useState(null);
    
    const router = useRouter();

    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://touchpay.gutouch.com/touchpay/script/prod_touchpay-0.0.1.js';
        script.type = 'text/javascript';
        script.async = true;
        document.head.appendChild(script);
        console.log('Pays sélectionné :', selectedCountry);
    }, [selectedCountry]);
    const handleDonClick = () => {
        // Rediriger vers la page donateNature
        router.push('/donate');
    };
    const handleDonSangClick = () => {
        // Rediriger vers la page donateNature
        router.push('/dondesang');
    };
    const handleDonNatureClick = () => {
        // Rediriger vers la page donateNature
        router.push('/donateNature');
    };
    // Reste du code...

    return (
        <div className="tp-donation-page-area section-padding">
            <style jsx>{`
                @media (max-width: 600px) {
                    .card-container {
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                        
                    }
                    .card {
                        margin-bottom: 30px;
                        max-width: 300px;
                        padding: 50px;
                        
                    }
                    
                }
            `}</style>

            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                        <div className="tp-doanation-payment" style={{ textAlign: 'center', background: '#1d5d1d', position: 'relative' }}>
                            <div><h1 style={{ color: 'white' }}>FAIRE UN DON </h1></div>
                            {/* <div className="card-container" style={{ display: 'flex', justifyContent: 'center', marginTop: '-0%' }}>
                                <Card className="card" sx={{ maxWidth: 200 }}  onClick={handleDonClick}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            height="50"
                                            image={pmt1.src}
                                            alt=""
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h6" component="div">
                                                Don financier
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                                <Card className="card" sx={{ maxWidth: 200, marginLeft: '20px'  }} onClick={handleDonNatureClick}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            height="60"
                                            image={pmt3.src}
                                            alt="green iguana"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h6" component="div">
                                                Don en nature
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                                <Card className="card c" sx={{ maxWidth: 200 , marginLeft: '20px' }} onClick={handleDonSangClick}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            height="50"
                                            image={pmt2.src}
                                            alt="green iguana"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h6" component="div">
                                                Don de sang
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </div> */}
                            <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          flexWrap: 'wrap',
        }}
      >
        <DonCard title="Don financier" iconSrc={pmt1.src} onClick={handleDonClick}/>
       <DonCard title="Don en nature" iconSrc={pmt3.src}  onClick={handleDonNatureClick}/>
        <DonCard title="Don de sang" iconSrc={pmt2.src} onClick={handleDonSangClick}/> 
      </div>

                            <div style={{ position: 'absolute', top: -10, left: -26, zIndex: 2, color: '#1d5d1d', borderRadius: '50%', background: 'white', padding: '25px' }}>
                                <FaBox size={30} />
                            </div>
                        </div>
                        <div id="Donations">
                            {/* ... (le reste du code) */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Donation;
