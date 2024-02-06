// import React from 'react';
// import { css } from '@emotion/react';
// import { ClipLoader } from 'react-spinners';

// const LoadingPage = () => {
//   const override = css`
//     display: block;
//     margin: 0 auto;
//   `;

//   return (
//     <div
//       style={{
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//         minHeight: '100vh',
//         marginTop: '70px'
//       }}
//     >
//       <h1 style={{  }}>En attente de paiement...</h1>
//       <ClipLoader color="#1d5d1d" loading size={40} css={override} />
//     </div>
//   );
// };

// export default LoadingPage;
import { css } from '@emotion/react';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { ClipLoader } from 'react-spinners';

const PaymentWaitingPage = () => {
    const override = css`
         display: block;
         margin: 0 auto;
       `;
  const router = useRouter();
  const [errorCode, setErrorCode] = useState(null);

  useEffect(() => {
    // Analyser les paramètres de l'URL
    const { errorCode: errorCodeParam } = router.query;

    // Mettre à jour l'état avec la valeur de errorCode
    setErrorCode(errorCodeParam);
  }, [router.query]);

  // Afficher une page de chargement par défaut pendant l'analyse des paramètres de l'URL
  if (errorCode === null) {
    return (
        <div
       style={{
         display: 'flex',
         flexDirection: 'column',
        alignItems: 'center',
        minHeight: '100vh',
        marginTop: '70px'
      }}
    >
      <h1 style={{  }}>En attente de paiement...</h1>
      <ClipLoader color="#1d5d1d" loading size={40} css={override} />
    </div>
    );
  }

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      {errorCode === '401' ? (
        <div>
          <h2>Échec de paiement</h2>
          <p>Le paiement a échoué. Veuillez réessayer ou contacter le support.</p>
        </div>
      ) : (
        <div>
          <h2>Paiement en attente</h2>
          <p>Votre paiement est en cours de traitement. Veuillez patienter.</p>
        </div>
      )}
    </div>
  );
};

export default PaymentWaitingPage;

