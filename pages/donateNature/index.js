import React, {Fragment} from 'react';
import Navbar from '../../components/Navbar'
import PageTitle from '../../components/pagetitle'
import Donate from '../../components/Donate'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'
import Donateme from '../../components/donateNature';

const DonateNature =() => {
    return(
        <Fragment>
            <Navbar/>
            {/* <PageTitle pageTitle={'Donate Now'} pagesub={'Donate'}/>  */}
            <Donateme/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default DonateNature;
