import React, { useState, useEffect } from 'react';

import pmt1 from '/public/images/partners/payment.png'
import pmt2 from '/public/images/checkout/img-2.png'
import pmt3 from '/public/images/checkout/img-3.png'
import pmt4 from '/public/images/checkout/img-4.png'
import Image from 'next/image'
import Pays from '../../api/pays';
import Causes from '../../api/cause'
// import 'react-phone-number-input/style.css'
import { PhoneInput } from 'react-international-phone';
import "react-international-phone/style.css";
import { useRouter } from 'next/router';
import { FaTint } from 'react-icons/fa';



const DonSang = (props) => {
    function getParams() {
        const phoneNumberWithoutCountryCode = phone ? phone.replace(/^(\+\d{1,3}\s?)?/, '') : '';

        var randomDigits = Math.floor(Math.random() * 1000000000);
        const paddedRandomNumber = randomDigits.toString().padStart(7, '0');
        const randomRef = 'DKI' + paddedRandomNumber;
        var succeslink = 'https://japnaci.vercel.app/reussi.php';
        var failedlink = 'https://japnaci.vercel.app/PaymentWaitingPage';
        var ref = randomRef;
        // var samamontant = montant
        var samamontant = isMontant1000Selected ? 1000 : montantSaisi; // Utilise 1000 CFA si le bouton radio "Montant de base (1000 CFA)" est sélectionné, sinon utilise la valeur saisie
        if (!samamontant) {
            alert("Veuillez renseigner le montant avant de continuer.");
            return;
        }

        console.log(samamontant);
        sendPaymentInfos(ref,
            'DAKIN14898', 'iDnrqZwm252SnwDuQvtHSIVxUgpmFXLzfLONQOOkH51ylgmlNw',
            'dkrinformatique.sn', succeslink,
            failedlink, samamontant,
            'Dakar', mail, '', '', phoneNumberWithoutCountryCode);

    }

    const [phone, setPhone] = useState("");

    const [mail, setMail] = useState('');
    const [montant, setMontant] = useState(1000); // Initialisez avec 1000 CFA par défaut
    const [montantSaisi, setMontantSaisi] = useState(''); // Pour gérer la saisie utilisateur
    const [isMontant1000Selected, setIsMontant1000Selected] = useState(true); // Pour gérer la sélection du bouton radio
    const [isAutreMontantSelected, setIsAutreMontantSelected] = useState(false);
    const [isMontantInputVisible, setIsMontantInputVisible] = useState(true); // Ajout de cet état


    const SubmitHandler = (e) => {
        router.push('/dondesangcontact')
        e.preventDefault()
    }
    const [selectedCountry, setSelectedCountry] = useState(null);

    const handleCountryChange = (event) => {
        // Mettez à jour l'état avec le pays sélectionné
        setSelectedCountry(event.target.value);
    };
    const router = useRouter();

    const { causeId } = router.query; // Récupérez le paramètre 'causeId' de l'URL
    const selectedCause = Causes.find((cause) => cause.id === causeId);
    const handleDonNatureClick = () => {
        // Rediriger vers la page donateNature
        router.push('/donateNature');
    };
    const handleDonClick = () => {
        // Rediriger vers la page donateNature
        router.push('/donate');
    };

    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://touchpay.gutouch.com/touchpay/script/prod_touchpay-0.0.1.js';
        script.type = 'text/javascript';
        script.async = true;
        document.head.appendChild(script);
        console.log('Pays sélectionné :', selectedCountry);
    }, [selectedCountry]);


    return (
        <div className="tp-donation-page-area section-padding">
            <style jsx>{`
    /* Ajoutez du CSS personnalisé pour styliser les boutons radio */
    .custom-radio-label {
        background-color: #ffffff; /* Couleur de fond des boutons non sélectionnés */
        border: 2px solid #1d5d1d; /* Bordure des boutons non sélectionnés */
        color: #1d5d1d; /* Couleur du texte des boutons non sélectionnés */
        cursor: pointer;
        padding: 8px 16px;
        border-radius: 4px;
        margin: 4px;
        transition: background-color 0.3s, color 0.3s;
    }

    .custom-radio-label.active {
        background-color: #1d5d1d; /* Couleur de fond des boutons sélectionnés */
        color: #ffffff; /* Couleur du texte des boutons sélectionnés */
    }
    .no-border {
        border: none;
        background-color: transparent;
    }
`}</style>

            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">

                    <div className="tp-doanation-payment" style={{ textAlign: 'center', background: '#1d5d1d', position: 'relative' }}>
                            <div><h1 style={{color:'white'}}>FAIRE UN DON DE SANG </h1></div>
                            {/* <div style={{ display: 'flex', justifyContent: 'center' ,marginTop: '-0%' }}>
                                 <span onClick={handleDonClick} style={{ cursor: 'pointer', marginRight: '20px',color:'white' , textDecoration: 'underline' }}>Cliquez pour faire un don financier.</span>
                                 
                                 <span onClick={handleDonNatureClick} style={{ cursor: 'pointer', marginRight: '20px', color: 'white', textDecoration: 'underline' }}>Cliquez pour faire un don en natures</span>
                            </div> */}
                             {/* Ajouter une icône de don */}
            <div style={{ position: 'absolute', top: -10, left: -26, zIndex: 2, color: 'red', borderRadius: '50%', background: 'white', padding: '25px' }}>
                <FaTint size={30} />
            </div>
                        </div>


                        <div id="Donations">
                            <form onSubmit={SubmitHandler} action="#">
                                <div className="tp-donations-amount" >
                                    <p>Vous avez entre 18 et 70 ans révolus ? Vous pesez plus de 50 kilos ? Bonne nouvelle, vous avez probablement un grand pouvoir, celui de sauver des vies en donnant votre sang ! Vous pouvez donner jusqu’à 6 fois par an pour les hommes et jusqu’à 4 fois pour les femmes. Attention, un donneur averti en vaut deux : seul le personnel de santé du Centre National de Transfusion Sanguine (CNTS) peut confirmer que vous pouvez donner du sang a l'issue de votre entretien médical.
Nous nous chargeons donc  simplement  de la mise en relation </p>

                                   <div className="submit-area sub-btn">
                                    <button type="submit" className="theme-btn submit-btn">Prendre rendez-vous</button>
                                </div>
                                  


                                </div>
                            
                               
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DonSang;