import React, {Fragment} from 'react';
import Navbar from '../../components/Navbar'
import PageTitle from '../../components/pagetitle'
import Contactpage from '../../components/Contactpage'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'
import DNContactpage from '../../components/DNContactpage';
import DSContactpage from '../../components/DSContactPage';

const ContactDonSangPage =() => {
    return(
        <Fragment>
            <Navbar/>
            {/* <PageTitle pageTitle={'Contact Us'} pagesub={'Contact'}/>  */}
            <DSContactpage/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default ContactDonSangPage;

