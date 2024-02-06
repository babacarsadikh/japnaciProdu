import React from 'react'
import Link from 'next/link'
import erimg from '/public/images/error-404.png'
import Image from 'next/image'

const Error = (props) => {
    return(
        <section className="error-404-section section-padding">
            <div className="container">
                <div className="row">
                    <div className="col col-xs-12">
                        <div className="content clearfix">
                            <div className="error">
                            </div>
                            <div className="error-message">
                                <h3>Oops!Votre paiement a echoué</h3>
                                <p>veuillez ressayer plutard...</p>
                                <Link href="/home" className="theme-btn"><i className="fa fa-angle-double-left"></i>Retour</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Error;