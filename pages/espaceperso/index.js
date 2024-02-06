import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar'

import Footer from '../../components/footer'
import DonateButton from '../../components/DonateButton/DonateButton';
import EspacePersoPage from '../../components/espacePerso';
const espacePerso = () => {
    return (
        <Fragment>
              <Navbar />
            <EspacePersoPage/>
            {/* <Footer /> */}
            <DonateButton/>
            {/* <Scrollbar /> */}
        </Fragment>
    )
};
export default espacePerso;