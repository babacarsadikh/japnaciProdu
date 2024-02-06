import React, {Fragment} from 'react';
import Navbar from '../../components/Navbar'
import PageTitle from '../../components/pagetitle'
import Donate from '../../components/Donate'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'
import Donation from '../../components/donation';
const donationPage =() => {
    return(
        <Fragment>
            <Navbar/>
            {/* <PageTitle pageTitle={'Donate Now'} pagesub={'Donate'}/>  */}
            <Donation/>
           
            <Scrollbar/>
            <Footer />
        </Fragment>
    )
};
export default donationPage;
