import React, {Fragment} from 'react';
import Navbar from '../../components/Navbar'
import PageTitle from '../../components/pagetitle'
import Contactpage from '../../components/Contactpage'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'
import DNContactpage from '../../components/DNContactpage';

const ContactDonPage =() => {
    return(
        <Fragment>
            <Navbar/>
            {/* <PageTitle pageTitle={'Contact Us'} pagesub={'Contact'}/>  */}
            <DNContactpage/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default ContactDonPage;

