import React, { useState, useEffect } from 'react';
import Link from 'next/link'

const DonateButton = () => {
    const [isHovered, setIsHovered] = useState(false);

  // Styles CSS pour le bouton fixe à droite
  const buttonStyles = {
    position: 'fixed',
    right: '20px',  // À 20px du bord droit
    bottom: '125px',  // À 20px du bas
    padding: '10px 20px',
    backgroundColor: '#1d5d1d',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
   // transition: 'background-color 7s, color 7s', // Changement de durée à 2 secondes  color .3s,background-color .3s
    transition: 'all .3s', // Changement de durée à 0.3 secondes

  };

  // Styles pour le texte qui apparaît lors du survol
  const textStyles = {
    position: 'fixed',
    right: '20px',
    bottom: '40px',
    color: '#1d5d1d',
    display: isHovered ? 'block' : 'none',

  };



  return (
    <div>
       <div className="slide-btns">
         <Link
           style={buttonStyles}
           onMouseEnter={() => setIsHovered(true)}
           onMouseLeave={() => setIsHovered(false)}
          href="/donation" className="theme-btn">
             <img
          src="/images/charite.png"  // Chemin vers votre image
          alt="Donate Icon"
          style={{ marginRight: '5px', width: '25px', height: '25px' }}
        />
        {isHovered && <span>Cliquez pour faire un don</span>}
           </Link>
       </div>
       
            {
            /* <button
                style={buttonStyles}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <img
                src="/images/charite.png"  // Chemin vers votre image
                alt="Donate Icon"
                style={{ marginRight: '5px', width: '25px', height: '25px' }}
                />
                {isHovered && <span>Cliquez pour faire un don</span>}
            </button> */
            }
      

     
    </div>
  );
};

export default DonateButton;
