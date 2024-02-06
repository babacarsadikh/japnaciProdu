import React, {Fragment} from 'react';
import Navbar from '../../components/Navbar'
import PageTitle from '../../components/pagetitle'
import CauseSection from '../../components/CauseSection';
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'
import DonateButton from '../../components/DonateButton/DonateButton';


const CausePage =() => {
    return(
        <Fragment>
            <Navbar/>
            {/* <PageTitle pageTitle={'Our Causes'} pagesub={'Causes'}/>  */}
            <CauseSection/>
            <Footer/>
            <Scrollbar/>
            <DonateButton/>
        </Fragment>
    )
};
export default CausePage;
