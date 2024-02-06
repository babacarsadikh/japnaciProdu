import React, {Fragment} from 'react';
import Navbar from '../../components/Navbar'
import PageTitle from '../../components/pagetitle'
import CauseSection from '../../components/CauseSection';
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'
import ActionSolidaire from '../../components/actionsolidaire';

const actionSolidaire =() => {
    return(
        <Fragment>
            <Navbar/>
            {/* <PageTitle pageTitle={'Our Causes'} pagesub={'Causes'}/>  */}
            <ActionSolidaire/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default actionSolidaire;
