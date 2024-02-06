import React, {Fragment} from 'react';
import Navbar from '../../components/Navbar'
import PageTitle from '../../components/pagetitle'
import Paymentwaitingpage from '../../components/paymentwaitingpage';
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'


const DonatePage =() => {
    return(
        <Fragment>
            <Navbar/>
            {/* <PageTitle pageTitle={'Donate Now'} pagesub={'Donate'}/>  */}
            <Paymentwaitingpage/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default DonatePage;
